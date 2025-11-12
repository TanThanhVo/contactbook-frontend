<template>
  <div class="page">
    <h4>
      Thêm Liên hệ
      <i class="fas fa-user-plus"></i>
    </h4>
    <ContactForm
      :contact="contact"
      :errors="errors"
      @submit:contact="addContact"
    />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      },
      message: "",
      errors: {},
    };
  },
  methods: {
    async addContact(data) {
      try {
        await ContactService.create(data);
        this.message = "Liên hệ được thêm thành công.";
        // Reset form
        this.contact = {
          name: "",
          email: "",
          address: "",
          phone: "",
          favorite: false,
        };
        // Chuyển về trang danh sách sau 2 giây
        setTimeout(() => {
          this.$router.push({ name: "contactbook" });
        }, 2000);
      } catch (error) {
        console.error("Lỗi khi thêm liên hệ:", error);
        if (error.response && error.response.status === 400) {
          this.errors = error.response.data;
        } else {
          this.message = "Lỗi khi thêm liên hệ. Vui lòng thử lại.";
        }
      }
    },
  },
};
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 0 auto;
}
</style>

