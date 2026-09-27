import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: movies, error } = await supabase
      .from('movies')
      .select('*, stream_sources(*)')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: movies || [] });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch movies' }, { status: 500 });
  }
}
