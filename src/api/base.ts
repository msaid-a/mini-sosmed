import axios, { AxiosRequestConfig, AxiosStatic, AxiosResponse } from 'axios';

class ApiBase {
  private axios: AxiosStatic;

  constructor() {
    this.axios = axios
    this.axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
    this.axios.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error)
    )
  }
    
  public async get(path: string, config?: AxiosRequestConfig) {
    return await this.axios.get(path, config) as any
  }

  public async delete(path: string, config?: AxiosRequestConfig) {
    return await this.axios.delete(path, config) as any
  }

  public async post(path: string, config?: AxiosRequestConfig, data?: any) {
    return await this.axios.post(path, config, data) as any
  }

  public async put(path: string, config?: AxiosRequestConfig, data?: any) {
    return await this.axios.put(path, config, data) as any
  }
  
}

const apiBase = new ApiBase();



export default apiBase;