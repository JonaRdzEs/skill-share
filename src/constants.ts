const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
const APP_ENV = process.env.NODE_ENV;

const PATHS = {
  ROOT: () => "/",
  HOME: () => "/dashboard/home",
  MY_PROFILE: () => "/dashboard/profile/me",
  SIGN_IN: () => "/signin",
  SIGN_UP: () => "/signup", 
}

export { API_BASE_URL, PATHS, APP_ENV, APP_BASE_URL };
