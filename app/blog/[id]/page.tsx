import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CommentsSection } from "../../../components/comments-section";
import { PostType } from "@/sanity/schemaTypes/postType";


const POST_QUERY = `*[_type == "post" && id == $id][0] {
  id,
  title,
  excerpt,
  content,
  author,
  date,
  "imageUrl": image.asset->url
}`;

const COMMENTS_QUERY = `*[_type == "comment" && approved == true]{
  _id,
  name,
  email,
  comment,
  post->{
    _id,
    title,
    slug
  }
}
`;

export async function generateStaticParams() {
  const posts = await client.fetch('*[_type == "post"] { id }');
  return posts.map((post: { id: string }) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await client.fetch(POST_QUERY, { id: params.id });
  const comments = await client.fetch(COMMENTS_QUERY, { id: params.id });

  if (!post) {
    notFound();
  }

  return (
    <div>
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
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 md:gap-4 text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="prose dark:prose-invert max-w-none text-base md:text-lg">
          <p>{post.content}</p>
        </div>

        {/* Comments Section */}
        <CommentsSection postId={params.id} />

        {/* Display Comments */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Comments</h3>
          {comments.map((comment: { name: string; comment: string; _createdAt: string }) => (
            <div key={comment._createdAt} className="border-b pb-4 mb-4">
              <p className="text-sm text-muted-foreground">{comment.name}</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
