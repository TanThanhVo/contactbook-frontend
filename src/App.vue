<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
/* BƯỚC 1: Thiết lập các phần tử gốc */
html, body {
  margin: 0; 
  padding: 0; 
  min-height: 100vh; 
  width: 100%;
}

#app {
  min-height: 100vh;
  width: 100%;
  margin-top: 5%;
  display: flex; 
  flex-direction: column; 
}

/* BƯỚC 3: Thiết lập bố cục chính (Nếu bạn dùng Flexbox cho Sidebar và Nội dung) */
.main-layout {
  display: flex; 
  flex: 1; /* Cho phép main-layout chiếm hết phần còn lại của #app */
  width: 100%;
}

.sidebar {
  width: 280px; /* Chiều rộng cố định, ví dụ 280px */
  flex-shrink: 0; /* Không cho phép sidebar bị co lại */
}

.content-view {
  align-items: center;
  flex-grow: 1; /* RẤT QUAN TRỌNG: Buộc vùng này mở rộng ra hết phần còn lại */
  overflow-y: auto; 
}

/* BƯỚC 4: Kiểm tra các container con có giới hạn chiều rộng cố định không */
.center-content {
  /* Đảm bảo KHÔNG CÓ thuộc tính width cố định (ví dụ: width: 800px) */
  max-width: 1200px; /* Chỉ giới hạn chiều rộng TỐI ĐA */
  width: 90%; /* Hoặc dùng width: 100% */
  margin: 0 auto; /* Đảm bảo căn giữa */
}
</style>
