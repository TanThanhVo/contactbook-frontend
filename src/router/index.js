// router/index.js

import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

/**
 * Danh sách các route trong ứng dụng
 */
const routes = [
  {
    path: "/",                  // đường dẫn URL
    name: "contactbook",        // tên định danh của route
    component: ContactBook,     // component sẽ render khi vào "/"
  },
  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/AddContact.vue"),
  },
  {
    path: "/contacts/:id/edit",
    name: "contact.edit",
    component: () => import("@/views/EditContact.vue"),
    props: true,
  },
];

/**
 * Tạo router với chế độ history
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
