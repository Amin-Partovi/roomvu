import React, { useState } from "react";
import Link from "next/link";

import { convertIdToDate, generateColor } from "@/utils";
import { Post } from "@/queries/posts/types";

import styles from "./post-list-item.module.scss";

const PostListItem = ({ post }: { post: Post }) => {
  const { title, body, id } = post;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleHover() {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 200);
  }
  return (
    <Link
      className={`${styles["post-card"]} ${isHovered ? styles.hovered : ""}`}
      href={`/${id}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <h2 className={styles.title} style={{ color: generateColor(id) }}>
        {title}
      </h2>

      <span className={styles.date}>{convertIdToDate(id)}</span>

      <p className={styles.body}>{body}</p>
    </Link>
  );
};

export default PostListItem;
