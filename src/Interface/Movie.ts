import { store } from "../Store";

export interface Movies {
  id?: string;
  title?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
}

export interface Movie extends Movies {
  backdrop_path?: string;
  homepage?: string;
  genres?: {
    id: number;
    name: string;
  };
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
