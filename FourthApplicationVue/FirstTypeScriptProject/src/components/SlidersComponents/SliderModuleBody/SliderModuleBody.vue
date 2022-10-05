<template>
    <div class="offcanvas-body listRestore">
        <div>
          <SliderModuleList />
        </div>
        <div class="dropdown mt-3">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
    </div>
</template>

<script src="./TSSliderModuleBody.ts" lang="ts"></script>

<style>
.listRestore {
    padding: 1rem 0rem 1rem 0rem;
}
</style>