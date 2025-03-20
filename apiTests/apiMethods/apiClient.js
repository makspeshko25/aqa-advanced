import axios from "axios";
import config from "../config/env.js";

class ApiClient {
    constructor() {
      this.client = axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: config.headers,
      });
    }
  
    async get(endpoint, params = {}) {
      return this.client.get(endpoint, { params });
    }
  
    async post(endpoint, data = {}) {
      return this.client.post(endpoint, data);
    }
  
    async put(endpoint, data = {}) {
      return this.client.put(endpoint, data);
    }
  
    async delete(endpoint) {
      return this.client.delete(endpoint);
    }
  }
  
  export default new ApiClient();