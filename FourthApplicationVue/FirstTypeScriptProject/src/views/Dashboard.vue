<script setup lang="ts">
import router from '../router/index.ts';
if (sessionStorage.getItem("user") == null) router.push({"name": "login"});
import SliderModule from "../components/SlidersComponents/SliderModule.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
    <SliderModule />
</template>