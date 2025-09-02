import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const cats = await prisma.category.findMany();
  return NextResponse.json(cats);
}

export async function POST(req: Request) {
  const { name } = await req.json();
  if (!name) return NextResponse.json({ error: "Name required" }, { status: 400 });
  const cat = await prisma.category.upsert({ where: { name }, update: {}, create: { name } });
  return NextResponse.json(cat, { status: 201 });
}
