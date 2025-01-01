import { blogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CommentsSection } from '@/components/comments/comments-section';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl mx-auto px-4 py-6 md:py-8">
      <div className="relative aspect-[21/9] mb-6 md:mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{post.title}</h1>
      <div className="flex items-center gap-2 md:gap-4 text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
        <span>{post.author}</span>
        <span>•</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div className="prose dark:prose-invert max-w-none text-base md:text-lg">
        <p>{post.content}</p>
      </div>
      <CommentsSection />
    </article>
  );
}