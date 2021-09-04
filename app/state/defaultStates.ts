export interface ShortenedUrlObj {
  url: string;
  short_url: string;
  slug: string;
}
export interface ShortenedState {
  shortenedUrls: ShortenedUrlObj[];
  loading: boolean;
  status: number;
  msg: string;
}

export const shortenedState: ShortenedState = {
  shortenedUrls: [],
  loading: false,
  status: 0,
  msg: '',
};
