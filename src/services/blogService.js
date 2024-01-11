import axiosInstance from "../utils/axiosInstance";


export const blogService = {
    getBlog(query = "") {
      return axiosInstance.get(`/blogs${query}`);
    },
    getBlogBySlug(slug = "") {
      return axiosInstance.get(`/blogs/${slug}`);
    },
  };