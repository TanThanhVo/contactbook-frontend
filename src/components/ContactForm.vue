<template>
  <div class="contact-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Tên <span class="text-danger">*</span></label>
        <input
          id="name"
          v-model="localContact.name"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          placeholder="Nhập tên"
          required
        />
        <div v-if="errors.name" class="invalid-feedback">
          {{ errors.name }}
        </div>
      </div>

      <div class="form-group">
        <label for="email">E-mail <span class="text-danger">*</span></label>
        <input
          id="email"
          v-model="localContact.email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          placeholder="Nhập email"
          required
        />
        <div v-if="errors.email" class="invalid-feedback">
          {{ errors.email }}
        </div>
      </div>

      <div class="form-group">
        <label for="address">Địa chỉ</label>
        <input
          id="address"
          v-model="localContact.address"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.address }"
          placeholder="Nhập địa chỉ"
        />
        <div v-if="errors.address" class="invalid-feedback">
          {{ errors.address }}
        </div>
      </div>

      <div class="form-group">
        <label for="phone">Điện thoại <span class="text-danger">*</span></label>
        <input
          id="phone"
          v-model="localContact.phone"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors.phone }"
          placeholder="Nhập số điện thoại"
          required
        />
        <div v-if="errors.phone" class="invalid-feedback">
          {{ errors.phone }}
        </div>
      </div>

      <div class="form-group">
        <div class="form-check">
          <input
            id="favorite"
            v-model="localContact.favorite"
            type="checkbox"
            class="form-check-input"
          />
          <label class="form-check-label" for="favorite">
            Liên hệ yêu thích
          </label>
        </div>
      </div>

      <div class="form-group d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-save mr-1"></i> Lưu
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click="goBack"
        >
          <i class="fas fa-arrow-left mr-1"></i> Quay lại
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: () => ({
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      }),
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["submit:contact"],
  data() {
    return {
      localContact: {
        name: "",
        email: "",
        address: "",
        phone: "",
        favorite: false,
      },
    };
  },
  watch: {
    contact: {
      handler(newVal) {
        if (newVal) {
          this.localContact = { ...newVal };
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit:contact", { ...this.localContact });
    },
    goBack() {
      this.$router.push({ name: "contactbook" });
    },
  },
};
</script>

<style scoped>
.contact-form {
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
}
</style>

