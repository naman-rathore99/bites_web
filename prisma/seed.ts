import { prisma } from "../lib/prisma";
import data from "../app/data/New_data.json";

async function main() {
  for (const cat of data.categories) {
    await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: { name: cat.name },
    });
  }

  for (const item of data.mockResults) {
    const cat = await prisma.category.findUnique({ where: { name: item.type } });
    if (!cat) continue;

    await prisma.menuItem.create({
      data: {
        name: item.name,
        price: item.price,
        image: item.image,
        type: item.type,
        categoryId: cat.id,
      },
    });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
