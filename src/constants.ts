const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;
const APP_ENV = process.env.NODE_ENV;

const ACCESS_TOKEN_MAX_AGE = 20 * 60; // 20 minutes;
const REFRESH_TOKEN_MAX_AGE = 10 * 60 * 60 * 24; // 10 days

const PATHS = {
  ROOT: () => "/",
  HOME: () => "/dashboard/home",
  MY_PROFILE: () => "/dashboard/profile/me",
  SIGN_IN: () => "/signin",
  SIGN_UP: () => "/signup",
};

const cookieOptions = {
  httpOnly: true,
  secure: APP_ENV === "production",
  sameSite: "lax" as boolean | "lax" | "strict" | "none" | undefined,
};

export {
  API_BASE_URL,
  PATHS,
  APP_ENV,
  APP_BASE_URL,
  ACCESS_TOKEN_MAX_AGE,
  REFRESH_TOKEN_MAX_AGE,
  cookieOptions,
};
