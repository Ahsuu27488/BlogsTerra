import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/lib/client";

const POSTS_QUERY = `*[_type == "post"] {
  id,
  title,
  excerpt,
  content,
  author,
  date,
  "imageUrl": image.asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogsPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">All Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 text-sm md:text-base line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

