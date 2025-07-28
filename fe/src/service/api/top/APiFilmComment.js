import axiosClient from "../../../config/axiosClient";

export const ApiHandlerFilmComment = {
    async fetchFilmComment() {
        const response = await axiosClient.get("/api/v1/film-comment");
        return response.data;
    },
};