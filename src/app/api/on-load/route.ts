import { NextResponse } from 'next/server';
import { responseData } from './response-data';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json(responseData);
}
