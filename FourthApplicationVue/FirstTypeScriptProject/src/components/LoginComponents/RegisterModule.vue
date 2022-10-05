<template>
    <form id="register">
        <div class="logo">
            <img class="imgReg" src="src/assets/logo.svg" alt="No se encontro la imagen" width="25%" height="25%"/>
        </div>
        <div class="form-floating mb-3">
            <input type="text" @keyup="validateUsername" v-model="username" class="form-control" :class="{'is-invalid' : usernameval}" id="floatingInput" placeholder="username">
            <label for="floatingInput">Ingresa tu nombre: </label>
            <div id="validationServer03Feedback" class="invalid-feedback">
                Nombre incompleto o mal ingresado!!!
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="text" @keyup="validateUserLastname" v-model="userlastname" class="form-control" :class="{'is-invalid' : userlastnameval}" id="floatingInput" placeholder="lastname">
            <label for="floatingInput">Ingresa tu apellido: </label>
            <div id="validationServer03Feedback" class="invalid-feedback">
                Apellido incompleto o mal ingresado!!!
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="email" @keyup="validateUserEmail" v-model="useremail" class="form-control" :class="{'is-invalid' : useremailval}" id="floatingInput" placeholder="email">
            <label for="floatingInput">Ingresa tu correo: </label>
            <div id="validationServer03Feedback" class="invalid-feedback">
                Correo incorrecto!!!
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="password" v-model="userpassword" class="form-control" :class="{'is-invalid' : samePassword}" id="floatingInput" placeholder="password">
            <label for="floatingInput">Ingresa tu contraseña: </label>
            <div id="validationServer03Feedback" class="invalid-feedback">
                Las contraseñas no coinciden!!!
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="password" @keyup="validatePasswords" v-model="confirmpassword" class="form-control" id="floatingInput" placeholder="passwordTwo">
            <label for="floatingInput">Confirmación de contraseña: </label>
        </div>
        <div class="btnModule">
            <button type="button" class="btn btn-outline-success">Registrar usuario</button>
        </div>
    </form>
</template>

<script src="./TSRegisterModule.ts" lang="ts"></script>

<style>

#register {
    box-shadow: 1px 3px 0 8px #ccc;
    width: 60%;
    padding: 1.5rem;
    margin: auto;
    margin-top: 3em;
    margin-bottom: 3em;
}

.imgReg {
    width: 25%;
    height: 25%;
}

.btnModule {
    display: flex;
    justify-content: center;
    margin-top: 4em;
    margin-bottom: 2em;
}

.logo {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
}
</style>