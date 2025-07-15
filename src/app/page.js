import { prisma } from "@/utils/prisma";
import { createNote } from "./action";

export default async function Home() {
  const notes = await prisma.notes.findMany();

  return (
    <div>
      <form action={createNote}>
        <input name="title" />
        <input name="content" />
        <button type="submit">Create Note</button>
      </form>
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
