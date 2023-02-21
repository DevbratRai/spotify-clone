export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const TOKEN_TYPE = "TOKEN_TYPE";
export const EXPIRES_IN = "EXPIRES_IN";
export const LOADED_TRACKS = "LOADED_TRACKS";
const APP_URL = import.meta.env.VITE_APP_URL;

export const ENDPOINT = {
  userInfo: "me",
  featuredPlaylist: "browse/featured-playlists?limit=5",
  toplists: "browse/categories/toplists/playlists?limit=10",
  playlist: "playlists",
  userPlaylist: "me/playlists",
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(EXPIRES_IN);
  localStorage.removeItem(TOKEN_TYPE);
  window.location.href = APP_URL;
};

export const setItemInLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
export const getItemFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const SECTIONTYPE = {
  DASHBOARD: "DASHBOARD",
  PLAYLIST: "PLAYLIST",
};
