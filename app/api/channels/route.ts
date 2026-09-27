import { NextResponse } from 'next/server';

export async function GET() {
  // Kwa sasa tunarudisha JSON tupu ili kuondoa lile kosa la "Unexpected end of JSON input"
  return NextResponse.json({ success: true, data: [] });
}
