import PostCard from "../components/PostCard";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function HomePage() {
  // Fetch data saat build time → SSG
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">📚 Blog Artikel</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.slice(0, 12).map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </main>
  );
}
