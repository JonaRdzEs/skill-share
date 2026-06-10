const API_BASE_URL = "http://localhost:3001";

const PATHS = {
  ROOT: () => "/",
  HOME: () => "/dashboard/home",
  MY_PROFILE: () => "/dashboard/profile/me",
  SIGN_IN: () => "/signin",
  SIGN_UP: () => "/signup", 
}

export { API_BASE_URL, PATHS };
