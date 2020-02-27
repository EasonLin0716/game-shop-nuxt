<template>
  <div class="bg-games">
    <AppNavbar />
    <template v-if="isRendering">
      <AppClipLoader />
    </template>
    <template v-else>
      <h1 class="title-lg mt-lg">Games</h1>
      <div class="container">
        <div v-for="game in games" :key="game.id" class="card">
          <h2 class="title-md">{{ game.name }}</h2>
          <div>
            <img :src="game.background_image" class="game-pic" alt="" />
          </div>
          <button
            class="button--green width-100"
            @click="openModal"
            :data-id="game.id"
          >
            Show Detail
          </button>
        </div>
      </div>
      <AppPagination
        @pageChange="handlePageChange"
        :currentPage="currentPage"
        :totalPages="totalPages"
      />
      <div class="modal">
        <div class="modal-container">
          <div class="modal-header">
            <span class="close" @click="closeModal">&times;</span>
          </div>
          <div class="modal-body">
            <h2 class="title-md">{{ game.name }}</h2>
            <img class="modal-pic" :src="game.background_image" alt="" />
            <div v-html="game.description"></div>
            <a :href="game.website" target="_blank"
              >&laquo; Visit Offical Website &raquo;</a
            >
          </div>
          <div class="modal-footer">
            <button class="button--grey" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { gamesApi } from "@/api/games.js";
import AppNavbar from "@/components/AppNavbar";
import AppClipLoader from "@/components/AppClipLoader";
import AppPagination from "@/components/AppPagination";
export default {
  components: { AppClipLoader, AppPagination, AppNavbar },
  data() {
    return {
      isRendering: true,
      games: [],
      game: {},
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
    },
    async openModal(e) {
      const { id } = e.target.dataset;
      const response = await gamesApi.getGame(id);
      this.game = response;
      this.game.description = this.game.description.slice(0, 300) + "...";
      console.log(this.game);
      const modal = document.querySelector(".modal");
      modal.classList.add("modal-show");
    },
    closeModal() {
      const modal = document.querySelector(".modal");
      modal.classList.remove("modal-show");
    }
  },
  created() {
    this.getGames(this.currentPage);
  }
};
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  overflow-y: auto;
}

.modal-show {
  display: block !important;
}

.modal-container {
  width: 95%;
  max-width: 720px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
}

.modal-header {
  padding: 5px 10px 5px 0;
  display: flex;
  justify-content: flex-end;
  border-bottom: 0.5px solid rgb(200, 200, 200);
}

.modal-body {
  padding: 25px;
}

.modal-pic {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
}

.modal-footer {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  border-top: 1px solid rgb(200, 200, 200);
}

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
