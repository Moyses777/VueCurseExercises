<template>
    <div :class="{'loader': activeLoader}"></div>
    <form id="login">
        <div class="logo">
            <img class="imgReg" src="src/assets/logo.svg" alt="No se encontro la imagen" width="25%" height="25%"/>
        </div>
        <div class="form-floating mb-3">
            <input type="email" :disabled="activeLoader" @keyup="UsernameVal" v-model="username" class="form-control" :class="{'is-invalid' : usernamebool}" id="floatingInput" placeholder="email">
            <label for="floatingInput">Ingresa tu correo: </label>
            <div id="validationServer03Feedback" class="invalid-feedback">
                Correo incorrecto!!!
            </div>
        </div>
        <div class="form-floating mb-3">
            <input type="password" :disabled="activeLoader" @keyup="PasswordVal" v-model="password" class="form-control" :class="{'is-invalid' : passwordbool}" id="floatingInput" placeholder="password">
            <label for="floatingInput">Ingresa tu contraseña: </label>
            <div id="validationServer03Feedback" class="invalid-feedback">
                La contraseña es muy corta!!!
            </div>
        </div>
        <div class="btnModule">
            <button @click="LoginValidation" :disabled="activeLoader" type="button" class="btn btn-outline-success">Iniciar Sesión</button>
        </div>
    </form>
</template>

<script src="./TSLoginModule.ts" lang="ts"></script>

<style>

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: fixed;
  left: 43%;
  top: 45%;
  z-index: 1;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#login {
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