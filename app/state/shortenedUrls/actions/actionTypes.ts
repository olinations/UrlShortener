import * as types from '../constants/shortenConstants';

export interface ILoadUrlPayload {
  short_url: string;
  slug: string;
  url: string;
}

export interface IAddUrlPayload {
  short_url: string;
  slug: string;
  url: string;
}

export type Actions =
  | {type: typeof types.START}
  | {type: typeof types.LOADURLS; payload: ILoadUrlPayload[]}
  | {type: typeof types.ADDURL; payload: IAddUrlPayload}
  | {type: typeof types.FAILED; payload: string}
  | {type: typeof types.REMOVEURL; payload: string}
  | {type: typeof types.RESETMSG};

export type Dispatch = (action: Actions) => void;
