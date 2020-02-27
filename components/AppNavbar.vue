<template>
  <div id="navbar">
    <img src="@/static/logo.png" class="logo" alt="logo" />
    <div class="nav-buttons">
      <span>Home</span>
      <span>News</span>
      <span>About</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    };
  }
};
</script>

<style scoped>
.logo {
  width: 30px;
  height: 30px;
  margin: 10px;
}

.nav-buttons {
  display: flex;
  align-items: center;
}

span {
  color: #fff;
  font-size: 20px;
  padding: 0 20px;
}

#navbar {
  background-color: #666;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  transition: top 0.3s;
}
</style>
