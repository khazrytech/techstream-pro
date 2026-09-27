import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sourceId = searchParams.get('sourceId');

    if (!sourceId) {
      return NextResponse.json({ success: false, error: 'Source ID is required' }, { status: 400 });
    }

    const { data: source, error } = await supabase
      .from('stream_sources')
      .select('url, is_active')
      .eq('id', sourceId)
      .single();

    if (error || !source || !source.is_active) {
      return NextResponse.json({ success: false, error: 'Stream source unavailable' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        playbackUrl: source.url,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
