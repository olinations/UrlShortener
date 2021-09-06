export interface IShortenedUrl {
  url: string;
  short_url: string;
  slug: string;
}
export interface IShortenedUrlsState {
  shortenedUrls: IShortenedUrl[];
  loading: boolean;
  status: number;
  msg: string;
}

export const shortenedState: IShortenedUrlsState = {
  shortenedUrls: [],
  loading: false,
  status: 0,
  msg: '',
};
