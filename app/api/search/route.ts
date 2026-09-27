import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';

  if (!query.trim()) {
    return NextResponse.json({ success: true, data: { channels: [], movies: [], series: [], sports: [] } });
  }

  try {
    const [channelsRes, moviesRes, seriesRes, sportsRes] = await Promise.all([
      supabase.from('channels').select('*').ilike('name', `%${query}%`),
      supabase.from('movies').select('*').ilike('title', `%${query}%`),
      supabase.from('series').select('*').ilike('title', `%${query}%`),
      supabase.from('sports').select('*').ilike('title', `%${query}%`),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        channels: channelsRes.data || [],
        movies: moviesRes.data || [],
        series: seriesRes.data || [],
        sports: sportsRes.data || [],
      },
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Search operation failed' }, { status: 500 });
  }
}
