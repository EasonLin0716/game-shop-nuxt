<template>
  <div class="bg-games">
    <template v-if="isRendering">
      <AppClipLoader />
    </template>
    <div v-else class="container">
      <h1>Games</h1>
      <div v-for="game in games" :key="game.id">
        <div class="game-box">
          <h2>{{ game.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gamesApi } from "@/api/games.js";
import AppClipLoader from "@/components/AppClipLoader";
export default {
  components: { AppClipLoader },
  data() {
    return {
      isRendering: true,
      games: []
    };
  },
  methods: {
    async getGames() {
      const { results } = await gamesApi.getGames();
      this.games = results;
      console.log(this.games);
      this.isRendering = false;
    }
  },
  created() {
    this.getGames();
  }
};
</script>

<style scoped></style>
