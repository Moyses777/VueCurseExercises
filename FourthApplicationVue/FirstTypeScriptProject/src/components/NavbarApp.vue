<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/public/favicon.ico" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                Bootstrap
            </a>
            <div>
                <RouterLink to="/login" v-if="validation == null" class="navbar-brand">Login</RouterLink>
                <RouterLink v-if="validation == null" class="navbar-brand" to="/register">Registrarse</RouterLink>
                <a v-if="validation != null" class="navbar-brand" @click="Logout" href="#">Cerrar Sesión</a>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import router from '../router/index.ts';

export default defineComponent({
    data: function () {
        return {
            validation: sessionStorage.getItem('user')
        }
    },
    methods: {
        Logout: function (){
            sessionStorage.removeItem("user");
            window.location.href = "/login";
        }   
    }  
});
</script>