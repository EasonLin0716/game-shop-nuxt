<template>
  <div id="landing-page" class="bg-games">
    <h1 class="title-lg">Welcome to game-shop-nuxt</h1>
    <button class="button--navy" @click="pushToGames">
      View all games
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    pushToGames() {
      this.$router.push("/games");
    }
  }
};
</script>

<style scoped>
#landing-page {
  animation: fadein 2s;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1,
button {
  position: relative;
  animation: slideup 0.5s;
}

button {
  display: block;
  margin: 0 auto;
}
</style>
