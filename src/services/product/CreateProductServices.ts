import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductServices {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {
    return { ok: true };
  }
}

export { CreateProductServices };
