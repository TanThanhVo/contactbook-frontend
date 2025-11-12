<template>
  <div id="app">
    <div class="center-content">
      <h1 class="main-title">XIN CHÀO!</h1>
      <p class="sub-title">Chào mừng bạn đến với Contact book</p>
    </div>
  </div>
</template>

<script>
// Đây là phần logic JavaScript cơ bản
export default {
  name: 'App',
  data() {
    return {
    };
  },
};
</script>

<style>
/* CSS cho ứng dụng Vue */
#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* Đặt toàn bộ ứng dụng vào giữa màn hình */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Chiếm toàn bộ chiều cao viewport */
  background-color: #f5f7fa; /* Màu nền sáng và hiện đại */
}

.center-content {
  padding: 40px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.main-title {
  font-size: 3em;
  color: #3498db; /* Màu xanh dương hiện đại */
  margin-bottom: 5px;
  font-weight: 800;
}

.sub-title {
  font-size: 1.2em;
  color: #7f8c8d;
  font-weight: 500;
}
</style>