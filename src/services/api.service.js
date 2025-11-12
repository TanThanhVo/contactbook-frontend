import axios from "axios";

// Cấu hình chung cho tất cả các request
const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

/**
 * Hàm tạo một instance Axios mới với baseURL và config chung
 * @param {string} baseURL - URL gốc cho các request
 * @returns {AxiosInstance} - Một instance Axios có sẵn cấu hình
 */
export default function createAxiosInstance(baseURL) {
  return axios.create({
    baseURL: baseURL,     // URL gốc (ví dụ: http://localhost:8080/api)
    ...commonConfig,      // Thêm các header chung
  });
}
