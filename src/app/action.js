"use server";

import { prisma } from "@/utils/prisma";

export async function createNote(formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  const note = await prisma.notes.create({
    data: {
      title,
      content,
    },
  });
  return note;
}
