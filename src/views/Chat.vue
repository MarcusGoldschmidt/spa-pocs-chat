<template>
    <div class="chat">
        <div class="chat__board">
            <p class="chat__board--room">Sala: {{user.room}}</p>
            <p class="chat__board--user">Usuário: {{user.name}}</p>
            <hr>
            <div id="users" v-for="(userOut, index) in users" v-bind:key="index">
                <p class="chat__board--user">{{ userOut.name }}</p>
            </div>
        </div>
        <div class="chat__message">
            <div class="chat__message--show">
                <div v-for="(userOut, index) in messages"
                     v-bind:key="index" v-bind:class="[userOut.mySelf ? 'chat__message--box-myself' : '']">
                    <div v-bind:key="index"
                         v-bind:class="[userOut.mySelf ? 'chat__message--myself' : 'chat__message--other']">
                        <p class="chat__board--user" v-bind:style="{ 'color': '#' + userOut.color }">
                            {{ userOut.title }}
                        </p>
                        <p class="chat__board--user">{{ userOut.text }}</p>
                    </div>
                </div>
            </div>
            <br>
            <p v-if="this.errors.message" class="home__message--error">{{ this.errors.message }}</p>
            <p v-if="isConnected" class="chat__message--connect">Conectado</p>
            <p v-if="!isConnected" class="chat__message--disconnect">Sem conexão</p>
            <form action="" class="chat__message--input" @submit.prevent="sendMessage">
                <input class="chat__message--input--text" type="text" id="message" name="message"
                       placeholder="Mensagem..."
                       v-model="user.message"
                       @change="sendIsDigitng">
                <button type="submit" class="chat__message--input--button">Enviar</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                isConnected: null,
                user: {
                    uid: null,
                    name: this.$route.params.name,
                    room: this.$route.params.room,
                    color: '',
                    message: '',
                    isDigiting: false,
                    mySelf: true,
                },
                errors: {
                    message: null,
                },
                messages: [],
                users: [],
            };
        },
        created() {
            // Quando usuario
            sessionStorage.poc_name = this.$route.params.name;
            // Enviando entrada da sala
            this.$socket.emit('connected', this.user);
        },
        methods: {
            sendMessage() {
                this.$socket.emit('index', this.user);
                this.messages.push({
                    title: this.user.name,
                    text: this.user.message,
                    color: this.user.color,
                    mySelf: true,
                });

                this.user.message = '';
            },
            sendIsDigitng() {
                this.$socket.emit('index', {
                    room: this.user.room,
                    name: this.user.name,
                    color: this.user.color,
                    mySelf: false,
                    isDigiting: true,
                });
            }
        },
        mounted() {
            this.sockets.subscribe(this.user.room, (data) => {

                if (data.message == null) {
                    this.users.push(data.name);
                } else if (!data.isDigiting) {
                    // Mensagem recebida
                    this.messages.push({
                        title: data.name,
                        text: data.message,
                        color: data.color,
                        mySelf: false,
                    });
                } else {
                    // Alguém está digitando
                }

            });

            this.sockets.subscribe(this.user.room + "_all_users", (data) => {
                this.users = data;
            });

            this.sockets.subscribe(this.user.room + "_user_in", (data) => {
                // Adicionando novo usuario que entrou
                // TODO: Fazer uma notificação de entrada
                this.users.push(data);
            });

            this.sockets.subscribe(this.user.room + "_user_out", (data) => {
                // Filtrando o usuario que saiu
                // TODO: Fazer uma notificação de saida
                this.users = this.users.filter((value, index, arr) => {
                    return data.uid !== value.uid;
                });
            });
        },
        sockets: {
            connect() {
                // Fired when the socket connects.
                this.isConnected = true;
            },
            disconnect() {
                this.isConnected = false;
            },
        },
    }
</script>

<style lang="scss" scoped>
    .chat {
        padding: 2%;
        display: flex;
        height: 100%;
        flex-wrap: wrap;

        &__board {
            height: 100%;
            max-height: 100%;
            width: 30%;

            @media (max-width: 768px) {
                width: 90%;
                height: 10%;
            }

            &--user {
                font-size: 1.5rem;
                margin: 0;
            }

            &--room {
                font-size: 1.8rem;
                font-weight: bold;
            }
        }

        &__message {
            width: 70%;
            padding-left: 5%;
            padding-bottom: 2%;
            @media (max-width: 768px) {
                height: 90%;
                width: 100%;
            }

            &--box-myself {
                margin-left: 40%;
            }

            &--myself {
                width: 90%;
                padding-left: 2%;
                border-radius: 10px;
                margin-top: 2%;
                border: 2px solid #00BCD4;
            }

            &--other {
                width: 60%;
                padding-left: 2%;
                border-radius: 10px;
                margin-top: 2%;
                border: 2px solid #00BCD4;
            }

            &--connect {
                color: #00e000;
            }

            &--disconnect {
                color: #ff251e;
            }

            &--show {
                height: 88%;
                overflow-x: hidden;
                overflow-y: scroll;
                @media (max-width: 768px) {
                    height: 80%;
                    padding-top: 5%;
                }
            }

            &--input {
                border-radius: 10px;
                width: 100%;
                border: 2px solid #00BCD4;
                display: flex;
                flex-wrap: nowrap;

                &--text {
                    width: 85%;
                    @media (max-width: 768px) {
                        width: 80%;
                    }
                    background-color: transparent;
                    color: white;
                    padding: 0.8rem;
                    transition: 500ms;
                    border-color: transparent;

                    &:focus {
                        color: white;
                        text-decoration: none;
                        outline: none;
                    }
                }

                &--button {
                    width: 15%;
                    @media (max-width: 768px) {
                        width: 20%;
                    }
                    font-size: 1.6rem;
                    border-radius: 0 10px 10px 0;
                    background-color: transparent;
                    border-color: transparent;
                    border-left: 2px solid #00BCD4;
                    color: white;
                    border-top: 0;
                    border-bottom: 0;
                    transition: 500ms;

                    &:hover {
                        outline: none;
                        background-color: #042f50;
                        transition: 500ms;
                    }

                    &:focus {
                        color: white;
                        text-decoration: none;
                        outline: none;
                    }
                }
            }
        }
    }
</style>
