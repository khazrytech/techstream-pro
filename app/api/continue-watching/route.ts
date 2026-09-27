import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ success: false, error: 'User ID required' }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from('continue_watching')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: data || [] });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch progress' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, contentType, contentId, progressSeconds, totalSeconds } = body;

    if (!userId || !contentType || !contentId) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('continue_watching')
      .upsert(
        {
          user_id: userId,
          content_type: contentType,
          content_id: contentId,
          progress_seconds: progressSeconds,
          total_seconds: totalSeconds,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id,content_type,content_id' }
      );

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to save progress' }, { status: 500 });
  }
}
