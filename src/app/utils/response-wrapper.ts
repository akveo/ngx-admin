export interface ResponseWrapper<T> {
    success: boolean;
    message: string;
    data: T;
    error?: any;
  }