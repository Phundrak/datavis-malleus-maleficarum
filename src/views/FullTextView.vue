<template>
  <h1>Malleus Maleficarum</h1>
  <p>Analyse réalisée par Lucien Cartier-Tilet et Guillaume Ertel.</p>
  <p>
    Analyse réalisée sur le texte du Malleus Maleficarum, un livre publié en
    1486 afin de définir ce qu’est la sorcellerie et comment la contrer, et sur
    sa
    <a href="https://www.sacred-texts.com/pag/mm/index.htm"
      >traduction anglaise de 1928</a
    >.
  </p>
  <h2>Full text analysis</h2>
  <h3>Évolution du ressenti général du texte selon IBM</h3>
  <p class="centered-text">
    <img alt="" src="/img/general-emotion.png" />
  </p>
  <h3>Évolution des émotions détaillées vis-à-vis du texte selon IBM</h3>
  <p class="centered-text">
    <img alt="" src="/img/detailed-emotions.png" />
  </p>
  <h3>
    Évolution de la fréquence des cinq mots les plus utilisés dans l’ensemble du
    texte.
  </h3>
  <iframe
    style="width: 1200px; height: 600px"
    src="https://voyant-tools.org/tool/Trends/?query=devil&query=god&query=witches&query=men&query=man&mode=document&corpus=28ecfc4db2e082190a2d9225e30d3fb8"
  ></iframe>
</template>

<script setup></script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  max-width: 1200px;
  margin: 3rem auto;
}
</style>
