"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createPost = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  await prisma.post.create({
    data: {
      body,
      title,
    },
  });
  revalidatePath("/posts");
};
