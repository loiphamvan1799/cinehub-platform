import axiosClient from "../../../config/axiosClient";

export const ApiHandlerShowing = {
    async fetchShowingFilms() {
        const response = await axiosClient.get("/api/v1/films/showing");
        return response.data;
    },
};
export const ApiHandlerComming = {
    async fetchComingFilms() {
        const response = await axiosClient.get("/api/v1/films/comming");
        return response.data;
    },
};
