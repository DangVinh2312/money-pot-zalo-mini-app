export type Response<T> = {
  data: T;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
  error?: unknown;
};
