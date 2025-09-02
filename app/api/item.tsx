import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const DATA_PATH = path.join(process.cwd(), "app/data/New_data.json");

// GET: Fetch all items
export async function GET() {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));
  return NextResponse.json(data);
}

// POST: Add new item
export async function POST(req: NextRequest) {
  const { name, price, category } = await req.json();
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

  const newItem = {
    id: Date.now(),
    name,
    price,
    category,
  };

  // push into mockResults instead of root
  data.mockResults.push(newItem);

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  return NextResponse.json(newItem, { status: 201 });
}

// DELETE: Remove item by id
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"));

  // filter items inside mockResults
  data.mockResults = data.mockResults.filter(
    (item: { id: number }) => item.id !== id
  );

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  return NextResponse.json({ deleted: id }, { status: 200 });
}
