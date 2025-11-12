<template>
  <div class="contact-card">
    <div class="p-2">
      <strong>Tên:</strong>
      {{ contact.name }}
    </div>
    <div class="p-2">
      <strong>E-mail:</strong>
      {{ contact.email }}
    </div>
    <div class="p-2">
      <strong>Địa chỉ:</strong>
      {{ contact.address }}
    </div>
    <div class="p-2">
      <strong>Điện thoại:</strong>
      {{ contact.phone }}
    </div>
    <div class="p-2">
      <strong>Liên hệ yêu thích:&nbsp;</strong>
      <span v-if="contact.favorite">✓</span>
    </div>
    <div class="mt-3 d-flex justify-content-between">
      <button class="btn btn-warning" @click="editContact">
        <i class="fas fa-pencil mr-1"></i> Hiệu chỉnh
      </button>
      <button class="btn btn-danger" @click="deleteContact">
        <i class="fas fa-trash mr-1"></i> Xóa
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  emits: ["edit", "delete"],
  methods: {
    editContact() {
      this.$emit("edit", this.contact);
    },
    deleteContact() {
      if (confirm(`Bạn có chắc muốn xóa liên hệ "${this.contact.name}"?`)) {
        this.$emit("delete", this.contact);
      }
    },
  },
};
</script>

<style scoped>
.contact-card {
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  padding: 1rem;
  background-color: #fff;
}
</style>
