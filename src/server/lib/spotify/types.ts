export interface SpotifyItem {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyItemAlbum;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyArtist {
  id: string;
  name: string;
}

export interface SpotifyItemAlbum {
  id: string;
  name: string;
  images: SpotifyImage[];
}

export interface SpotifyImage {
  url: string;
  width: number;
  height: number;
}

export interface CurrentPlayingResponse {
  timestamp?: number;
  progress_ms?: number;
  is_playing: boolean;
  item?: SpotifyItem;
}

export interface LastPlayedResponse {
  items: {
    track: {
      album: SpotifyItemAlbum;
      artists: SpotifyArtist[];
      external_urls: {
        spotify: string;
      };
      id: string;
      name: string;
    };
  }[];
  limit: number;
  next: string;
  cursors: {
    after: string;
  };
  total: number;
}

export interface TopTracksResponse {
  href: string;
  items: {
    album: SpotifyItemAlbum;
    artists: SpotifyArtist[];
    external_urls: {
      spotify: string;
    };
    popularity: number;
    id: string;
    name: string;
  }[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}
