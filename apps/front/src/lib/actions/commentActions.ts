'use server';

import { fetchGraphQL } from '@/lib/fetchGraphQL';
import { GET_POST_COMMENTS } from '@/lib/gqlQueries';
import { CommentEntity } from '@/lib/types/modelTypes';
import { print } from 'graphql';

export async function getPostComments({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip: number;
  take: number;
}) {
  const data = await fetchGraphQL(print(GET_POST_COMMENTS), {
    postId,
    take,
    skip,
  });

  return {
    comments: data.getPostComments as CommentEntity[],
    count: data.postCommentCount as number,
  };
}
