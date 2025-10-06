import Link from "next/link";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

export default function PostCard({ id, title, body }: PostCardProps) {
  return (
    <div className="p-5 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-3 line-clamp-2">{body}</p>
      <Link
        href={`/posts/${id}`}
        className="text-blue-600 hover:underline font-medium"
      >
        Baca Selengkapnya →
      </Link>
    </div>
  );
}
