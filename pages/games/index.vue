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
            <img :src="game.background_image" width="100%" alt="" />
          </div>
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
