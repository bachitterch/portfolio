import { Env } from "src/server/env";
import { Dependencies } from "src/server/utils";
import { CurrentPlayingResponse, LastPlayedResponse } from "./types";

export interface AccessTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export class SpotifyService {
  private readonly env: Env;

  constructor(deps: Dependencies) {
    this.env = deps.env;
  }

  public async getLastPlayed(accessToken: string): Promise<LastPlayedResponse> {
    const res: Response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.json();
  }

  public async getNowPlaying(
    accessToken: string
  ): Promise<CurrentPlayingResponse> {
    const res = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (res.status === 204 || res.status > 400) {
      return {
        is_playing: false,
      };
    }

    return res.json();
  }

  public async getAccessToken(): Promise<AccessTokenResponse> {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: this.getAuthHeader(),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams([
        ["grant_type", "refresh_token"],
        ["refresh_token", this.env.SPOTIFY_REFRESH_TOKEN],
      ]).toString(),
    });

    return res.json();
  }

  private getAuthHeader(): string {
    return `Basic ${btoa(
      this.env.SPOTIFY_CLIENT_ID + ":" + this.env.SPOTIFY_CLIENT_SECRET
    )}`;
  }
}
