<template>
  <div id="app-pagination">
    <ul class="pagination">
      <li
        class="page-number"
        v-for="num in totalPages"
        :key="num"
        :class="{ active: num === currentPage }"
      >
        <a @click="emitPageChange(num)">{{ num }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
a {
  display: block;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: #777;
  border-radius: 50%;
  transition: 0.3s;
}

#app-pagination {
  padding: 30px 0 10px 0;
  display: flex;
  justify-content: center;
}

.pagination {
  --active-index: 0;
  display: flex;
  padding: 10px 20px;
  background: white;
  border-radius: 50px;
  box-shadow: 0 0.3px 0.6px rgba(0, 0, 0, 0.056),
    0 0.7px 1.3px rgba(0, 0, 0, 0.081), 0 1.3px 2.5px rgba(0, 0, 0, 0.1),
    0 2.2px 4.5px rgba(0, 0, 0, 0.119), 0 4.2px 8.4px rgba(0, 0, 0, 0.144),
    0 10px 20px rgba(0, 0, 0, 0.2);
}

.page-number {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.active {
  background: #000;
  border-radius: 50%;
}

.active a {
  color: #fff;
  pointer-events: none;
}
</style>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    emitPageChange(num) {
      this.$emit("pageChange", num);
    }
  }
};
</script>
