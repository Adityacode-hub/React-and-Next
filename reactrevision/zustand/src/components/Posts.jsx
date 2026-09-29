import { useEffect } from "react";
import { usePostsStore } from "../store/postStore";

export default function Posts() {
  const {
    posts,
    loading,
    error,
    fetchPosts,
  } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}