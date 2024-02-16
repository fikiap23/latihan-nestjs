export const sendResponseApi = (
  statusCode: number,
  message: string,
  data?: any,
) => {
  return { statusCode, message, data };
};
