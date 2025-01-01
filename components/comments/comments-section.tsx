'use client';

import { useState, useEffect } from 'react';
import { CommentList } from './comment-list';
import { CommentForm } from './comment-form';
import { Comment } from '@/lib/types';
import { getInitialComments } from '@/lib/initial-comments';
import { useParams } from 'next/navigation';

export function CommentsSection() {
  const { id } = useParams();
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const initialComments = getInitialComments(id as string);
      setComments(initialComments);
      setIsLoading(false);
    }
  }, [id]);

  const handleAddComment = (author: string, content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author,
      content,
      date: new Date().toISOString(),
    };
    setComments((prev) => [newComment, ...prev]);
  };

  if (isLoading) {
    return (
      <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
        <h2 className="text-xl md:text-2xl font-bold">Comments</h2>
        <p className="text-muted-foreground text-sm md:text-base">Loading comments...</p>
      </div>
    );
  }

  return (
    <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
      <h2 className="text-xl md:text-2xl font-bold">Comments</h2>
      <CommentForm onSubmit={handleAddComment} />
      <div className="mt-6 md:mt-8">
        {comments.length > 0 ? (
          <CommentList comments={comments} />
        ) : (
          <p className="text-muted-foreground text-sm md:text-base">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
}