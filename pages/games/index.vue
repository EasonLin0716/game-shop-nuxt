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
      <AppPagination
        @pageChange="handlePageChange"
        :currentPage="currentPage"
        :totalPages="totalPages"
      />
    </template>
  </div>
</template>

<script>
import { gamesApi } from "@/api/games.js";
import AppClipLoader from "@/components/AppClipLoader";
import AppPagination from "@/components/AppPagination";
export default {
  components: { AppClipLoader, AppPagination },
  data() {
    return {
      isRendering: true,
      games: [],
      currentPage: 1,
      totalPages: 10
    };
  },
  methods: {
    async getGames(page, numberOfGames = 9) {
      this.isRendering = true;
      const { results } = await gamesApi.getGames(page, numberOfGames);
      this.games = results;
      this.isRendering = false;
    },
    async handlePageChange(num) {
      this.currentPage = num;
      this.getGames(this.currentPage);
    }
  },
  created() {
    this.getGames(this.currentPage);
  }
};
</script>

<style scoped>
@media (max-width: 1000px) {
  .container {
    grid-template-columns: 50% 50%;
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 100%;
  }
}
</style>
