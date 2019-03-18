<template>
    <div class="home">
        <h1>Project Of Computer Science</h1>
        <h2>Chat</h2>
        <br>
        <div class="home__input-group">
            <form @submit.prevent="checkForm">
                <label class="form-label home__input-group--label" for="user">Name:</label>
                <p v-if="this.errors.name" class="home__input-group--error">{{ this.errors.name}}</p>
                <input class=" home__input-group--input" type="text" id="user" name="user" placeholder="Nome"
                       v-model="user.name">

                <label class="form-label home__input-group--label" for="room">Sala:</label>
                <p v-if="this.errors.room" class="home__input-group--error">{{ this.errors.room}}</p>
                <input class="home__input-group--input" type="text" id="room" name="room" placeholder="Sala"
                       v-model="user.room">
                <button type="submit" class="home__input-group--button">
                    Entrar na Sala
                </button>
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
                user: {
                    name: localStorage.poc_name ,
                    room: this.$route.params.room,
                },
                errors: {
                    name: null,
                    room: null
                }
            };
        },
        methods: {
            checkForm: function () {

                if (this.user.name && this.user.room) {
                    this.errors.room = null;
                    this.errors.name = null;
                    this.$router.push({name: `chat`, params: {room: this.user.room, name: this.user.name}});
                }

                if (!this.user.name) {
                    this.errors.name = 'O nome é obrigatório.';
                } else {
                    this.errors.name = null;
                }

                if (!this.user.room) {
                    this.errors.room = 'Você deve selecioanar uma sala.';
                } else {
                    this.errors.room = null;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        padding: 2%;
        text-align: center;

        &__input-group {
            margin-left: 25%;
            width: 50%;
            @media (max-width: 768px){
                margin-left: 10%;
                width: 80%;
            }

            &--label {
                font-size: 1.6rem;
                text-align: left;
            }

            &--input {
                max-width: 100%;
                width: 100%;
                padding: .7rem 1rem;
                font-size: 1.6rem;
                height: 4rem;
                border-radius: 10px;
                background-color: transparent;
                border: 2px solid #00BCD4;
                color: white;
                transition: 500ms;

                &:focus {
                    outline: none;
                    border-color: #005b6e;
                    box-shadow: none;
                    transition: 500ms;
                }
            }

            &--button {
                font-size: 1.6rem;
                padding: 1rem;
                border-radius: 10px;
                background-color: transparent;
                border: 2px solid #00BCD4;
                color: white;
                margin-top: 5%;
                @media (max-width: 768px){
                    margin-top: 15%;
                }

                &:hover {
                    outline: none;
                    color: white;
                    text-decoration: none;
                    border-color: #005b6e;
                    box-shadow: none;
                    transition: 500ms;
                }

                &:focus {
                    color: white;
                    text-decoration: none;
                    outline: none;
                }
            }

            &--error {
                text-align: left;
                color: #ff8383;
            }
        }
    }
</style>
