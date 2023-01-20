<template>
  <h2>Analysis of fragment {{ id }}</h2>
  <p>
    Représentation visuelle du texte selon le modèle OpenJourney 2.0, utilisé
    via Stable Diffusion
  </p>
  <p class="centered-text">
    <img alt="" :src="`/datavis-malleus-maleficarum/img/${id}.png`" />
  </p>

  <p>Les dix termes les plus communs du texte sont les suivants</p>
  <table class="centered">
    <thead>
      <tr>
        <th>Mot</th>
        <th>Occurrence</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="line in frequency">
        <td v-for="data in line">{{ data }}</td>
      </tr>
    </tbody>
  </table>
  <div v-if="emotions">
    <p>
      Selon l’outil d’analyse d’émotions d’IBM, le texte inspire les émotions
      suivantes :
    </p>
    <table>
      <thead>
        <tr>
          <th>Émotion</th>
          <th>Valeur associée</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Impression générale (de -1 à 1)</td>
          <td>{{ emotions.general }}</td>
        </tr>
        <tr>
          <td>Tristesse (de 0 à 1)</td>
          <td>{{ emotions.sadness }}</td>
        </tr>
        <tr>
          <td>Joie (de 0 à 1)</td>
          <td>{{ emotions.joy }}</td>
        </tr>
        <tr>
          <td>Peur (de 0 1)</td>
          <td>{{ emotions.fear }}</td>
        </tr>
        <tr>
          <td>Dégoût (de 0 à 1)</td>
          <td>{{ emotions.disgust }}</td>
        </tr>
        <tr>
          <td>Colère (de 0 à 1)</td>
          <td>{{ emotions.anger }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import emotions from '@/assets/emotions.json';

export default {
  data() {
    return {
      id: this.$route.params.id,
      frequency: null,
      text: null,
      emotions: null,
    };
  },
  mounted() {
    this.emotions = emotions.find((e) => e.fragment == this.id);
    fetch(`/datavis-malleus-maleficarum/data/fragments/${this.id}.txt`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.text();
      })
      .then((text) => {
        this.text = text;
      })
      .catch(function () {
        console.log('Error trying to fetch content');
      });
    fetch(`/datavis-malleus-maleficarum/data/fragments/${this.id}.txt.csv`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.text();
      })
      .then((text) => {
        this.frequency = text
          .trim()
          .split('\n')
          .map((line) => {
            return line.split(',');
          })
          .sort((a, b) => b[1] - a[1])
          .splice(0, 10);
      })
      .catch(function () {
        console.log('Error trying to fetch content');
      });
  },
};
</script>

<style scoped>
#app {
  overflow: visible;
  max-width: 800px;
  margin: 3rem auto;
  padding: 3rem;
}

p {
  text-align: center;
}

table {
  background-color: @nord3;
  margin: 0 auto;
}

thead,
tr,
th,
tbody,
td {
  text-align: center;
}

th,
td {
  padding: 1em;
}

tr:nth-child(odd) {
  background-color: #333;
}

tr:nth-child(even) {
  background-color: #222;
}

thead,
thead tr,
thead th {
  background-color: #444;
}
</style>
