import dayjs from "dayjs";
import "dayjs/locale/vi";
dayjs.locale("vi");

export const fetchData = async (endpoint, params = {}) => {
  const baseUrl = "https://api.hoccungchin.online/api";
  const queryString = new URLSearchParams(params).toString();
  const url = `${baseUrl}${endpoint}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ API fetch error:", error);
    throw error;
  }
};

export const getCinemasByFilmId = async (filmId) => {
  const data = await fetchData("/cinema-films/film", { filmId });

  const theaters =
    data?.data?.result?.map((cinema) => ({
      id: cinema.cinemaId,
      name: cinema.name,
    })) || [];

  return theaters;
};

const formatShowDate = (dateStr) =>
  dayjs(dateStr).format("dddd, DD/MM/YYYY");

const normalizeTimes = (showTime) => {
  if (showTime == null) return [];

  if (Array.isArray(showTime)) {
    return showTime
      .map(String)
      .map((s) => {
        const parts = s.trim().split(":");
        return parts.length >= 2
          ? `${parts[0].padStart(2, "0")}:${parts[1].padStart(2, "0")}`
          : s.trim();
      })
      .filter(Boolean);
  }

  if (typeof showTime === "string") {
    const s = showTime.trim();
    if (s === "") return [];

    if (s.includes(",")) {
      return s.split(",").map((x) => {
        const parts = x.trim().split(":");
        return parts.length >= 2
          ? `${parts[0].padStart(2, "0")}:${parts[1].padStart(2, "0")}`
          : x.trim();
      });
    }
    const parts = s.split(":");
    if (parts.length >= 2) {
      return [`${parts[0].padStart(2, "0")}:${parts[1].padStart(2, "0")}`];
    }
    return [s];
  }

  return [];
};

export const getFilmShowingInfo = async (filmId, cinemaId) => {
  const data = await fetchData("/cinema-films/showingInfo", { filmId, cinemaId });
  const result = data?.data?.result || [];

  return result.map((item) => ({
    date: formatShowDate(item.showDate),
    times: normalizeTimes(item.showTime),
  }));
};
