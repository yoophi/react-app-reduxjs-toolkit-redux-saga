export interface UnsplashState {
  isLoading: boolean;
  images: any[];
  error: any;
}
export type LoadPayload = {
  key: string;
  page?: number;
};
export type LoadSuccessPayload = any[];
export type LoadFailPayload = string;
