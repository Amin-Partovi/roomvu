"use client";
import { useMemo } from "react";

import { usePostsQuery } from "@/queries";
import { PostListItem, Spinner } from "@/components/elements";

import styles from "./home.module.scss";

export default function Home() {
  const { data: posts, isLoading } = usePostsQuery();
  const sortedPosts = useMemo(
    () => (posts ? posts.sort((a, b) => a.id - b.id) : []),
    [posts],
  );

  if (isLoading) {
    return (
      <div className={styles.loading} data-testid="loading-spinner">
        <Spinner />
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {sortedPosts?.map((post) => <PostListItem post={post} key={post.id} />)}
    </main>
  );
}
