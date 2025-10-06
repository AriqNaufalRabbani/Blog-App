interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  params: { id: string };
}

export default async function PostDetailPage({ params }: Props) {
  const { id } = params;

  // Fetch data di server setiap kali halaman dibuka → SSR
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store", // penting untuk SSR (tidak cache)
  });

  if (!res.ok) {
    return <p>Gagal memuat artikel.</p>;
  }

  const post: Post = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{post.body}</p>

        <a
          href="/"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          ← Kembali ke daftar
        </a>
      </div>
    </main>
  );
}
