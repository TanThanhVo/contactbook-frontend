import createApiClient from "./api.service";

/**
 * Lớp ContactService dùng để gọi API liên quan đến "contacts"
 */
class ContactService {
  constructor(baseUrl = "/api/contacts") {
    // Tạo instance axios với baseURL
    this.api = createApiClient(baseUrl);
  }

  /** Lấy toàn bộ danh sách liên hệ */
  async getAll() {
    const response = await this.api.get("/");
    return response.data;
  }

  /** Tạo mới một liên hệ */
  async create(data) {
    const response = await this.api.post("/", data);
    return response.data;
  }

  /** Xóa toàn bộ liên hệ */
  async deleteAll() {
    const response = await this.api.delete("/");
    return response.data;
  }

  /** Lấy thông tin chi tiết một liên hệ theo ID */
  async get(id) {
    const response = await this.api.get(`/${id}`);
    return response.data;
  }

  /** Cập nhật thông tin một liên hệ */
  async update(id, data) {
    const response = await this.api.put(`/${id}`, data);
    return response.data;
  }

  /** Xóa một liên hệ theo ID */
  async delete(id) {
    const response = await this.api.delete(`/${id}`);
    return response.data;
  }
}

export default new ContactService();
