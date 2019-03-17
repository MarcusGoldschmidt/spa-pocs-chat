<template>
    <div class="home">
        <h1>Project Of Computer Science</h1>
        <h2>Chat</h2>
        <br>
        <div class="home__input-group">
            <label class="form-label home__input-group--label" for="user">Name:</label>
            <input class=" home__input-group--input" type="text" id="user" placeholder="Nome"
                   v-model="usuario.user">

            <label class="form-label home__input-group--label" for="channel">Sala:</label>
            <input class="home__input-group--input" type="text" id="channel" placeholder="Sala"
                   v-model="usuario.room">
            <br>
            <br>
            <br>
            <a href="" class="home__input-group--button">Entrar na Sala</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                usuario: {
                    user: '',
                    room: '',
                }
            };
        },
    }
</script>

<style lang="scss">
    .home {
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
