export const INITIAL_HEIGHT = 100;

export const INIT_LAT = 37.566481622437934;
export const INIT_LNG = 126.98502302169841;
export const REGEX = {
  number: /^[0-9]+$/,
  id: /^[a-zA-Z0-9]+$/,
  password: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^*+=-]{7,30}$/,
  phoneNumber: /[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/,
} as const;
