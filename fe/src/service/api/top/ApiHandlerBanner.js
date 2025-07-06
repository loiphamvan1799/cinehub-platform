import axiosClient from "../../../config/axiosClient";

export const ApiHandlerBanner = {
  async fetchAllDataBanners() {
    const response = await axiosClient.get('/v1/banners');
    return response.data;
  },
};