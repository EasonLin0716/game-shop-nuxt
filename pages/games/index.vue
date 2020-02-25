<template>
  <div class="bg-games">
    <template v-if="isRendering">
      <AppClipLoader />
    </template>
    <template v-else>
      <h1 class="title-lg">Games</h1>
      <div class="container">
        <div v-for="game in games" :key="game.id" class="card">
          <h2 class="title-md">{{ game.name }}</h2>
          <div>
            <img :src="game.background_image" class="game-pic" alt="" />
          </div>
          <button class="button--green b-0">Show Detail</button>
        </div>
      </div>
    </template>
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
    async getGames(page, numberOfGames = 9) {
      const { results } = await gamesApi.getGames(page, numberOfGames);
      results.forEach(result => {
        this.games.push(result);
      });
      this.isRendering = false;
    }
  },
  created() {
    this.getGames(1);
  }
};
</script>

<style scoped></style>
