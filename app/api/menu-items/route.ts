import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const items = await prisma.menuItem.findMany({ include: { category: true } });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const { name, price, image, type, category } = await req.json();

  if (!name || !price || !image || !type || !category) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const cat = await prisma.category.upsert({
    where: { name: category },
    update: {},
    create: { name: category },
  });

  const item = await prisma.menuItem.create({
    data: { name, price, image, type, categoryId: cat.id },
  });

  return NextResponse.json(item, { status: 201 });
}
