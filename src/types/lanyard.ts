export namespace API {
  export type SuccessfulAPIResponse<T> = {
    data: T;
    success: true;
  };

  export type ErroredAPIResponse = {
    error: { code: string; message: string };
    success: false;
  };
}

export type Options = {
  /**
   * The Base URL of Lanyard's API. Defaults to `https://api.lanyard.rest`
   */
  api: {
    hostname: string;
    secure?: boolean;
  };

  /**
   * Initial data to use. Useful if server side rendering.
   */
  initialData?: Data;
};

export const DEFAULT_OPTIONS: Options = {
  api: {
    hostname: 'api.lanyard.rest',
    secure: true,
  },
};

export type Snowflake = `${bigint}`;

export type LanyardResponse = API.ErroredAPIResponse | API.SuccessfulAPIResponse<Data>;

export interface Data {
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_web: boolean;
  activities: Activity[];
  discord_status: 'dnd' | 'idle' | 'offline' | 'online';
  discord_user: DiscordUser;
  kv: Record<string, string>;
  listening_to_spotify: boolean;
  spotify: Spotify | null;
}

export interface Spotify {
  album: string;
  album_art_url: null | string;
  artist: string;
  song: string;
  timestamps: Timestamps;
  track_id: null | string;
}

export interface Timestamps {
  end: number;
  start: number;
}

export interface DiscordUser {
  avatar: null | string;
  avatar_decoration_data: {
    asset: string;
    sku_id: bigint;
  } | null;
  bot: boolean;
  discriminator: string;
  /**
   * @deprecated Use global_name instead.
   */
  display_name: null | string;
  global_name: null | string;
  id: Snowflake;
  public_flags: number;
  username: string;
}

export interface Activity {
  application_id?: Snowflake;
  assets?: Assets;
  created_at: number;
  details?: string;
  emoji?: Emoji;
  flags?: number;
  id: string;
  name: string;
  party?: Party;
  session_id?: string;
  state: string;
  sync_id?: string;
  timestamps?: Timestamps;
  type: number;
}

export interface Emoji {
  animated: boolean;
  id: Snowflake;
  name: string;
}

export interface Party {
  id: string;
  size: [number, number];
}

export interface Assets {
  large_image: string;
  large_text: string;
  small_image: string;
  small_text: string;
}
