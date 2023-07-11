export interface ReturnService<T> {
  data: T;
  message: string;
  success: boolean;
}

export function returnProvider<T>(data: T, message: string, success: boolean): Promise<ReturnService<T>> {
  return Promise.resolve({
    data,
    message,
    success
  });
}
