import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';

    let userMessage = '';

    // Handle form-data
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const text = formData.get('text')?.toString();
      userMessage = text || '';
    } else {
      // Handle JSON
      const body = await req.json();
      userMessage = body.text || '';
    }

    if (!userMessage) {
      return NextResponse.json({ text: 'Please enter a message.' }, { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: userMessage }],
      temperature: 0.7,
    });

    const replyText = response.choices[0]?.message?.content || 'Sorry, no response from AI.';

    return NextResponse.json({ text: replyText });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ text: 'An error occurred while processing your message.' }, { status: 500 });
  }
}

