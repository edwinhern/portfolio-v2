// *API*
// Github

type GithubRepo = {
  description: string;
  forks: number;
  image: string;
  language: string;
  languageColor: string;
  link: string;
  owner: string;
  repo: string;
  stars: number;
  website: string;
};

// Wakatime
type Languages = {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: number;
};

// Discord
type DiscordUser = {
  avatar: string;
  global_name: string;
  id: string;
  username: string;
};

type Status = 'dnd' | 'idle' | 'offline' | 'online' | string;

type Activity = {
  application_id?: string;
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
  details?: string;
  name: string;
  state?: string;
  timestamps?: {
    end?: number;
    start?: number;
  };
};

type DiscordApiContent = {
  activities: Activity[];
  discord_status: string;
  discord_user: DiscordUser;
  spotify: {
    album_art_url: string;
  };
} & DiscordKeyString;

type DiscordKeyString = {
  [key: string]: DiscordApiContent;
};

type DiscordApiResponse = {
  data: DiscordApiContent;
};
