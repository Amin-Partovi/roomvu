"use client";

import React from "react";

import { usePostQuery } from "@/queries";
import { Spinner } from "@/components/elements";
import { TEXTS, convertIdToDate } from "@/utils";

import styles from "./page.module.scss";

const PostDetail = ({ params }: { params: { id: number } }) => {
  const { data, isLoading, isError } = usePostQuery({ id: params.id });

  if (isLoading) {
    return (
      <div className={styles.loading} data-testid="loading-spinner">
        <Spinner />
      </div>
    );
  }

  if (!data || isError) {
    return <h1 className={styles.error}>{TEXTS.ERROR}</h1>;
  }

  const { title, id, body } = data;

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>

      <span className={styles.date}>{convertIdToDate(id)}</span>

      <p>{body}</p>
    </main>
  );
};

export default PostDetail;
