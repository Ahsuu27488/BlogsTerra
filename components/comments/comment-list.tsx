'use client';

import { Comment } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="p-3 md:p-4 rounded-lg border bg-card text-card-foreground"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-sm md:text-base">{comment.author}</span>
            <span className="text-xs md:text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
            </span>
          </div>
          <p className="text-sm md:text-base">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}