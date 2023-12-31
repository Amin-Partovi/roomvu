const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const ENDPOINTS = {
  POSTS: `${BASE_URL}/posts`,
  POST: ({ id }: { id: number }) => `${BASE_URL}/posts/${id}`,
};
