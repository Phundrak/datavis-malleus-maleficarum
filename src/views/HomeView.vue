<template>
  <div id="container"></div>
  <div id="info"></div>
  <div id="menu" ref="menu">
    <button id="table">table</button>
    <button id="sphere">sphere</button>
    <button id="helix">helix</button>
    <button id="grid">grid</button>
    <button id="fulltext">full text</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const scripts = ["/js/data.js", "/js/index.js"];

const menu = ref(null);

onMounted(() => {
  /* console.debug("Hello");
   * console.debug(menu.value); */
  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.text = `(function () {
     window.SIG_EXT = {};
   })();`;
  menu.value.parentElement.parentElement.appendChild(script);
  scripts.forEach((src) => {
    let script = document.createElement("script");
    script.setAttribute("src", src);
    menu.value.parentElement.parentElement.append(script);
  });
});
</script>

<style scoped></style>
