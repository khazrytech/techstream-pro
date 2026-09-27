import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const [categoriesRes, genresRes] = await Promise.all([
      supabase.from('categories').select('*').order('name'),
      supabase.from('genres').select('*').order('name'),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        categories: categoriesRes.data || [],
        genres: genresRes.data || [],
      },
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to fetch categories' }, { status: 500 });
  }
}
