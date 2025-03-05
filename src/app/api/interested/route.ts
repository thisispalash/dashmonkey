import { NextRequest, NextResponse } from 'next/server';

import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const { error } = await supabaseAdmin
    .from('monkey_interest')
    .insert({ email });
  
  if (error) {
    return NextResponse.json({ message: 'Signup failed' }, { status: 500 });
  }
  return NextResponse.json({ message: 'Signup successful' });
}