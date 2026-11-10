
"use client";

import { useMutation } from "@tanstack/react-query";

async function addPost(newPost) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!res.ok) throw new Error("Failed");

  return res.json();
}

export default function AddPost() {
  const mutation = useMutation({
    mutationFn: addPost,
  });

  return (
    <div>
      <button
        onClick={() =>
          mutation.mutate({
            title: "Hello",
            body: "My first post",
            userId: 1,
          })
        }
      >
        Add Post
      </button>

      {mutation.isPending && <p>Adding...</p>}
      {mutation.isSuccess && <p>Post Added!</p>}
      {mutation.isError && <p>Error!</p>}
    </div>
  );
}
