<template>
  <div class="page">
    <h4>
      Chỉnh sửa Liên hệ
      <i class="fas fa-user-edit"></i>
    </h4>
    <div v-if="contact">
      <ContactForm
        :contact="contact"
        :errors="errors"
        @submit:contact="updateContact"
      />
      <p>{{ message }}</p>
    </div>
    <div v-else>
      <p>Đang tải thông tin liên hệ...</p>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: null,
      message: "",
      errors: {},
    };
  },
  methods: {
    async getContact(id) {
      try {
        this.contact = await ContactService.get(id);
      } catch (error) {
        console.error("Lỗi khi tải thông tin liên hệ:", error);
        this.$router.push({ name: "contactbook" });
      }
    },
    async updateContact(data) {
      try {
        await ContactService.update(this.id, data);
        this.message = "Liên hệ được cập nhật thành công.";
        // Chuyển về trang danh sách sau 2 giây
        setTimeout(() => {
          this.$router.push({ name: "contactbook" });
        }, 2000);
      } catch (error) {
        console.error("Lỗi khi cập nhật liên hệ:", error);
        if (error.response && error.response.status === 400) {
          this.errors = error.response.data;
        } else {
          this.message = "Lỗi khi cập nhật liên hệ. Vui lòng thử lại.";
        }
      }
    },
  },
  created() {
    this.getContact(this.id);
    this.message = "";
  },
};
</script>

<style scoped>
.page {
  max-width: 600px;
  margin: 0 auto;
}
</style>

