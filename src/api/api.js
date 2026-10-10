import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let refreshPromise = null;

api.interceptors.request.use(
  (config) => {
    if (config.withCredentials === true) {
      const access = localStorage.getItem("access");

      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest.withCredentials !== true ||
      originalRequest._retry ||
      originalRequest.url?.includes("token/refresh/")
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = (async () => {
          const refresh = localStorage.getItem("refresh");

          if (!refresh) {
            throw new Error("Refresh token not found");
          }

          const response = await axios.post(
            `${BASE_URL}token/refresh/`,
            { refresh },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const newAccess = response.data.access;

          if (!newAccess) {
            throw new Error("No access token returned");
          }

          localStorage.setItem("access", newAccess);
          if (response.data.refresh) {
            localStorage.setItem("refresh", response.data.refresh);
          }

          return newAccess;
        })();
      }

      const newAccess = await refreshPromise;

      originalRequest.headers.Authorization = `Bearer ${newAccess}`;

      return api(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("role");
      localStorage.removeItem("username");

      return Promise.reject(refreshError);
    } finally {
      refreshPromise = null;
    }
  }
);

export default api;



export const officialLogin = async(data) =>{
    const response = await api.post(
        'users/login/',
        data
    )
    return response.data
}


export const Logout = async (data) => {
  const response = await api.post('logout/', data);
  return response.data;
};