import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: channels, error } = await supabase
      .from('channels')
      .select('*, categories(id, name, slug), stream_sources(*)')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: channels || [] });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch channels' }, { status: 500 });
  }
}
