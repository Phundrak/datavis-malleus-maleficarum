<template>
  <Teleport to="body">
    <div id="container"></div>
    <div id="info"></div>
    <div id="menu" ref="menu">
      <button id="table">table</button>
      <button id="sphere">sphere</button>
      <button id="helix">helix</button>
      <button id="grid">grid</button>
      <router-link to="/full-text">
        <button id="fulltext">full text</button>
      </router-link>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const scripts = [
  '/datavis-malleus-maleficarum/js/data.js',
  '/datavis-malleus-maleficarum/js/index.js',
];
const menu = ref(null);

onMounted(() => {
  let script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.text = `(function () {
     window.SIG_EXT = {};
   })();`;
  menu.value.parentElement.parentElement.appendChild(script);
  scripts.forEach((src) => {
    let script = document.createElement('script');
    script.setAttribute('src', src);
    menu.value.parentElement.parentElement.append(script);
  });
});

const gofulltext = () => {
  console.log('go full text');
};
</script>

<style scoped>
html,
body {
  overflow: hidden;
}
</style>
