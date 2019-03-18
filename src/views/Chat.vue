<template>
    <div class="chat">
        <div class="chat">

        </div>
        <div>

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
                    name: '',
                    room: '',
                    color: '',
                    mensage: '',
                    isDigit: null,
                },
                users:{
                  name: []
                }
            };
        },
    }
</script>

<style lang="scss" scoped>
    .chat {
        padding: 2%;
        text-align: center;

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
