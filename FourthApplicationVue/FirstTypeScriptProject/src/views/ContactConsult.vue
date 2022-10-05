<script setup lang="ts">
import router from '../router/index.ts';
if (sessionStorage.getItem("user") == null) router.push({"name": "login"});
import { RouterLink, RouterView } from "vue-router";
import SliderModule from "../components/SlidersComponents/SliderModule.vue";
</script>
<template>
    <div>
        <SliderModule />
    </div>
</template>