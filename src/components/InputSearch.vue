<template>
  <div class="input-group">
    <!-- Ô nhập liệu -->
    <input
      type="text"
      class="form-control"
      placeholder="Nhập thông tin cần tìm"
      :value="modelValue"
      @input="updateModelValue"
      @keyup.enter="submit"
    />

    <!-- Nút tìm kiếm -->
    <button
      class="btn btn-outline-secondary"
      type="button"
      @click="submit"
    >
      <i class="fas fa-search mr-1"></i> Tìm kiếm
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBox",

  props: {
    /** Giá trị ô nhập liệu (dùng cho v-model) */
    modelValue: { type: String, default: "" },
  },

  emits: ["update:modelValue", "submit"],

  methods: {
    /** Cập nhật model khi người dùng nhập */
    updateModelValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },

    /** Gửi sự kiện tìm kiếm */
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style scoped>
.input-group {
  width: 100%;
  display: flex;
}

.input-group .form-control {
  flex: 1;
}

.input-group .btn {
  margin-left: -1px;
}
</style>
