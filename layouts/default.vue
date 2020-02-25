<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "@/assets/css/reset.css";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.title-lg {
  font-size: 64px;
  text-align: center;
  margin-bottom: 20px;
}

.title-md {
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 20px;
  justify-content: center;
}

.card {
  background: #fff;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px;
  height: 380px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.bg-games {
  background: linear-gradient(
      rgba(240, 240, 240, 0.5),
      rgba(240, 240, 240, 0.5)
    ),
    url("../assets/img/games-background.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.game-pic {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
