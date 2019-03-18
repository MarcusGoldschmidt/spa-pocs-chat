<template>
    <div class="chat">
        <div class="chat__board">
            <p class="chat__board--user">{{ user.name}}</p>
            <div id="users" v-for="userOut in users.name">
                <p class="chat__board--user">{{ userOut }}</p>
            </div>
        </div>
        <div class="chat__mensage">
            <div class="chat__mensage--show">
                <div>

                </div>
            </div>
            <div class="chat__mensage--input">

            </div>
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
                    name: this.$route.params.name,
                    room: this.$route.params.room,
                    color: '',
                    mensage: '',
                    isDigit: null,
                },
                users: {
                    name: []
                }
            };
        },
        created() {
            localStorage.poc_name = this.$route.params.name;
        }
    }
</script>

<style lang="scss" scoped>
    .chat {
        padding: 2%;
        display: flex;

        &__board{
            height: 100%;
            max-height: 100%;
            width: 30%;
            &--user{
                font-size: 1.6rem;
            }
        }

        &__mensage{
            height: 100%;
            max-height: 100%;
            width: 70%;
        }

        &__input-group {
            margin-left: 25%;
            width: 50%;

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

                &:hover {
                    outline: none;
                    color: white;
                    text-decoration: none;
                    border-color: #005b6e;
                    box-shadow: none;
                    transition: 500ms;
                }
            }
        }
    }
</style>
