"use client";
import { useMemo } from "react";

import { usePostsQuery } from "@/queries";
import { PostListItem, Spinner } from "@/components/elements";
import { TEXTS } from "@/utils";

import styles from "./home.module.scss";

export default function Home() {
  const { data: posts, isLoading, isError } = usePostsQuery();
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

  if (isError) {
    return <h1 className={styles.error}>{TEXTS.ERROR}</h1>;
  }

  return (
    <main className={styles.main}>
      {sortedPosts?.map((post) => <PostListItem post={post} key={post.id} />)}
    </main>
  );
}
