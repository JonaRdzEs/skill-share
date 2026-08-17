export const buildQueryParams = (params: Record<string, string | number | boolean>): string => {
  if (Object.keys(params).length === 0) return "";

  const queryParamsArr = Object.keys(params).map(
    (key) => `${key}=${params[key]}`
  );

  return `?${queryParamsArr.join("&")}`;
};