import { createPost } from "@/actions/actions";
import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  // const { isAuthenticated } = getKindeServerSession();

  // if (!(await isAuthenticated())) {
  //   redirect("/api/auth/login?post_login_redirect_url=./create-post");
  // }

  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <form
        action={createPost}
        className="flex flex-col max-w-[400px] gap-2 mt-10 mx-auto my-10"
      >
        <input
          type="text"
          className="border rounded px-3 h-10"
          name="title"
          placeholder="Title of your post"
          required
        />
        <textarea
          name="body"
          placeholder="body content for new post"
          className="border rounded px-3 py-2"
          rows={6}
        ></textarea>
        <button className="h-full bg-blue-500 px-5 rounded text-white ">
          submit
        </button>

        <LogoutLink>Log out</LogoutLink>
      </form>
    </main>
  );
};

export default page;
