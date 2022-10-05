<template>
    <li :class="{'selected': isNative, 'sectionItem': !isNative}" @click="redirectTo">
        <span class="spanInfo">{{ content }}</span>
    </li>
</template>

<script src="./TSSliderModuleListItem.ts" lang="ts"></script>

<style>
.selected {
    background: #8080808c;
    color: white;
    height: 4em;
    display: flex;
    align-items: center;
    border: 1px solid black;
}

.sectionItem:hover {
    background-color: red;
    color: white;
    font-size: 22px;
    border: 2px solid white;
    box-shadow: grey 1px 9px 1px;
}

.sectionItem {
    height: 4em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid black;
}

.spanInfo {
    margin-left: 5%;
    font-size: 18px;
    font-family: sans-serif;
}
</style>