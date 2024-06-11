import prisma from "@/lib/db";
import Link from "next/link";

const PostsList = async () => {
  const posts = await prisma.post.findMany();
  return (
    <ul>
      {posts.map((post: any) => {
        return (
          <li className="mb-3" key={post.id}>
            <Link className="text-2xl text-black" href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
