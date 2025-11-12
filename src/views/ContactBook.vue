<template>
  <div class="page">
    <div class="mb-4">
      <InputSearch v-model="searchText" />
    </div>

    <div class="row">
      <div class="col-md-6">
        <h4>
          Danh bạ
          <i class="fas fa-user"></i>
        </h4>

        <ContactList
          v-if="filteredContactsCount > 0"
          :contacts="filteredContacts"
          v-model:activeIndex="activeIndex"
        />
        <p v-else>Không có liên hệ nào.</p>

        <div class="mt-3 d-flex justify-content-around align-items-center">
          <button class="btn btn-sm btn-primary" @click="refreshList()">
            <i class="fas fa-rotate-right mr-1"></i> Làm mới
          </button>
          <button class="btn btn-sm btn-success" @click="goToAddContact">
            <i class="fas fa-plus mr-1"></i> Thêm mới
          </button>
          <button class="btn btn-sm btn-danger" @click="removeAllContacts">
            <i class="fas fa-trash mr-1"></i> Xóa tất cả
          </button>
        </div>
      </div>

      <div class="col-md-6">
        <h4>
          Chi tiết Liên hệ
          <i class="fas fa-user"></i>
        </h4>
        <div v-if="activeContact">
          <ContactCard
            :contact="activeContact"
            @edit="handleEdit"
            @delete="handleDelete"
          />
        </div>
        <div v-else class="text-muted mt-3">
          <p>Chọn một liên hệ để xem chi tiết</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/ContactList.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactCard,
    InputSearch,
    ContactList,
  },

  data() {
    return {
      contacts: [],
      activeIndex: -1,
      searchText: "",
    };
  },

  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  
  computed: {
  // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
    contactStrings() {
      return this.contacts.map((contact) => {
        const { name, email, address, phone } = contact;
        return [name, email, address, phone].join("");
      });
    },

    filteredContacts() {
      if (!this.searchText) return this.contacts;
        return this.contacts.filter((_contact, index) =>
        this.contactStrings[index].includes(this.searchText)
      );
    },

    activeContact() {
      if (this.activeIndex < 0) return null;
      return this.filteredContacts[this.activeIndex];
    },

    filteredContactsCount() {
      return this.filteredContacts.length;
    },
  },

  methods: {
    async retrieveContacts() {
      try {
        this.contacts = await ContactService.getAll();
      } catch (error) {
        console.error("Lỗi khi tải danh sách liên hệ:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        } else if (error.request) {
          console.error("Không nhận được phản hồi từ server:", error.request);
          alert("Không thể kết nối đến server. Vui lòng kiểm tra backend có đang chạy không.");
        } else {
          console.error("Lỗi:", error.message);
        }
      }
    },

    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },

    async removeAllContacts() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await ContactService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },

    goToAddContact() {
      this.$router.push({ name: "contact.add" });
    },

    handleEdit(contact) {
      // Chuyển đến trang chỉnh sửa
      this.$router.push({
        name: "contact.edit",
        params: { id: contact._id },
      });
    },

    async handleDelete(contact) {
      try {
        await ContactService.delete(contact._id);
        this.refreshList();
      } catch (error) {
        console.error("Lỗi khi xóa liên hệ:", error);
        alert("Lỗi khi xóa liên hệ. Vui lòng thử lại.");
      }
    },
  },

  mounted() {
    this.refreshList();
  },
};
</script>

<style scoped>
.page {
  text-align: left;
  width: 100%;
}
</style>
