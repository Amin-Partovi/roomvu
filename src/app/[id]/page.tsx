"use client";

import React from "react";

import { usePostQuery } from "@/queries";
import { Spinner } from "@/components/elements";
import { convertIdToDate } from "@/utils";

import styles from "./page.module.scss";

const PostDetail = ({ params }: { params: { id: number } }) => {
  const { data, isLoading } = usePostQuery({ id: params.id });

  if (isLoading) {
    return (
      <div className={styles.loading} data-testid="loading-spinner">
        <Spinner />
      </div>
    );
  }

  if (!data) {
    return <></>;
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
