<template>
    <ul class="listItems">
        <SliderModuleListItem content="Dashboard" redirectProp="dashboard"/>
        <SliderModuleListItem content="Registro de contacto" redirectProp=""/>
        <SliderModuleListItem content="Consulta de contactos" redirectProp="contactconsult"/>
        <SliderModuleListItem content="Chat" />
    </ul>
</template>

<script src="./TSSliderModuleList.ts" lang="ts"></script>

<style>
.listItems {
    list-style: none;
    padding-left: 0px;
}

</style>