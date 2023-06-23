import { IAuthResponse, ITokens } from "@/app/store/user/user.interface";
import Cookies from "js-cookie";

export const getAccessToken = async () => {
  const accessToken = Cookies.get("accessToken");
  return accessToken || null;
};

export const getUserFromStorage = async () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};

export const saveTokensStorage = async (data: ITokens) => {
  Cookies.set("accessToken", data.accessToken);
  Cookies.set("refreshToken", data.refreshToken);
};

export const removeFromStorage = async () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  localStorage.removeItem("user");
  localStorage.removeItem("persist:music-app");
};

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data);
  localStorage.setItem("user", JSON.stringify(data.user));
};