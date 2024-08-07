export type AppConfig = {
  apiPrefix: string;
  tourPath: string;
  locale: string;
  enableMock: boolean;
};

const appConfig: AppConfig = {
  apiPrefix: "http://192.168.173.217:3000/api/v1",
  tourPath: "/",
  locale: "en",
  enableMock: false,
};

export default appConfig;