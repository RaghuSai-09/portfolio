import { NextRequest, NextResponse } from 'next/server';

const categories = [
  { label: 'Politics', keywords: ['government', 'president', 'election', 'congress', 'senate', 'democrat', 'republican', 'policy', 'vote', 'legislation', 'political', 'campaign', 'minister', 'parliament', 'law', 'regulation', 'treaty', 'diplomat', 'sanction'] },
  { label: 'Technology', keywords: ['software', 'ai', 'machine learning', 'computer', 'data', 'algorithm', 'neural', 'cloud', 'api', 'code', 'programming', 'app', 'digital', 'cyber', 'robot', 'automation', 'startup', 'silicon', 'tech', 'model', 'gpu', 'transformer', 'llm'] },
  { label: 'Sports', keywords: ['game', 'team', 'player', 'score', 'championship', 'tournament', 'coach', 'season', 'match', 'league', 'goal', 'win', 'loss', 'athlete', 'stadium', 'nba', 'nfl', 'fifa', 'cricket', 'tennis'] },
  { label: 'Science', keywords: ['research', 'study', 'experiment', 'discovery', 'scientist', 'biology', 'physics', 'chemistry', 'molecule', 'gene', 'cell', 'theory', 'hypothesis', 'lab', 'quantum', 'space', 'nasa', 'climate', 'species', 'evolution'] },
  { label: 'Business', keywords: ['market', 'stock', 'company', 'revenue', 'profit', 'investor', 'startup', 'economy', 'trade', 'finance', 'bank', 'ceo', 'growth', 'acquisition', 'ipo', 'valuation', 'earnings', 'shares', 'billion', 'million'] },
  { label: 'Health', keywords: ['health', 'medical', 'doctor', 'patient', 'disease', 'treatment', 'hospital', 'vaccine', 'drug', 'symptom', 'diagnosis', 'therapy', 'clinical', 'mental', 'wellness', 'nutrition', 'cancer', 'virus', 'pandemic'] },
  { label: 'Entertainment', keywords: ['movie', 'film', 'music', 'actor', 'singer', 'album', 'concert', 'show', 'celebrity', 'award', 'oscar', 'grammy', 'netflix', 'streaming', 'director', 'series', 'box office', 'release'] },
];

function classify(text: string): { label: string; confidence: number } {
  const lower = text.toLowerCase();
  const words = lower.split(/\s+/);

  const scores = categories.map((cat) => {
    let score = 0;
    for (const keyword of cat.keywords) {
      if (keyword.includes(' ')) {
        if (lower.includes(keyword)) score += 2;
      } else {
        for (const word of words) {
          if (word.includes(keyword) || keyword.includes(word)) {
            score += 1;
          }
        }
      }
    }
    return { label: cat.label, score };
  });

  scores.sort((a, b) => b.score - a.score);

  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  const best = scores[0];

  if (best.score === 0) {
    return { label: 'General / Uncategorized', confidence: 0.5 };
  }

  const confidence = Math.min(0.98, 0.55 + (best.score / Math.max(totalScore, 1)) * 0.4);
  return { label: best.label, confidence };
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text || typeof text !== 'string' || text.trim().length < 3) {
      return NextResponse.json(
        { label: 'Please enter a longer sentence', confidence: 0 },
        { status: 400 }
      );
    }

    const result = classify(text);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { label: 'Error processing text', confidence: 0 },
      { status: 500 }
    );
  }
}
