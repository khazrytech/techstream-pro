export type ContentType = 'channel' | 'movie' | 'episode' | 'sport';

export interface Category {
  id: string;
  name: string;
  slug: string;
  type: string;
}

export interface StreamSource {
  id: string;
  content_type: ContentType;
  content_id: string;
  title: string;
  url: string;
  format: 'hls' | 'mp4' | 'embed';
  quality: string;
  priority: number;
  is_active: boolean;
}

export interface Channel {
  id: string;
  name: string;
  logo_url: string;
  category_id?: string;
  is_active: boolean;
  is_featured: boolean;
  sources?: StreamSource[];
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  poster_url: string;
  backdrop_url: string;
  release_year: number;
  duration: number;
  rating: number;
  language: string;
  quality: string;
  is_featured: boolean;
  is_trending: boolean;
  sources?: StreamSource[];
}

export interface Series {
  id: string;
  title: string;
  description: string;
  poster_url: string;
  backdrop_url: string;
  release_year: number;
  rating: number;
  is_featured: boolean;
  episodes?: Episode[];
}

export interface Episode {
  id: string;
  series_id: string;
  season_number: number;
  episode_number: number;
  title: string;
  description: string;
  thumbnail_url: string;
  duration: number;
  sources?: StreamSource[];
}

export interface SportEvent {
  id: string;
  title: string;
  competition: string;
  status: 'LIVE' | 'UPCOMING' | 'ENDED';
  start_time: string;
  thumbnail_url: string;
  category_id?: string;
  sources?: StreamSource[];
}

export interface ContinueWatching {
  id: string;
  user_id: string;
  content_type: ContentType;
  content_id: string;
  progress_seconds: number;
  total_seconds: number;
  updated_at: string;
  details?: Movie | Episode | SportEvent;
}
