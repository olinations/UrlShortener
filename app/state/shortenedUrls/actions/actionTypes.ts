import * as types from '../constants/shortenConstants';

export interface LoadUrlPayload {
  short_url: string;
  slug: string;
  url: string;
}

export interface AddUrlPayload {
  short_url: string;
  slug: string;
  url: string;
}

export type Actions =
  | {type: typeof types.START}
  | {type: typeof types.LOADURLS; payload: LoadUrlPayload[]}
  | {type: typeof types.ADDURL; payload: AddUrlPayload}
  | {type: typeof types.FAILED; payload: string}
  | {type: typeof types.REMOVEURL; payload: string}
  | {type: typeof types.RESETMSG};

export type Dispatch = (action: Actions) => void;
