import React from "react";
import styles from "./NewsCompStyles.module.css";

export const NewsComp = (props) => {
  return (
    <div>
      <a
        href={props.article.url}
        target="_blank"
        className={styles.anchorEl}
        rel="noopener noreferrer"
      >
        <div className={styles.newsContainer}>
          <img
            src={props.article.urlToImage}
            alt={props.article.title}
            className={styles.newsImg}
          />
          <h2>{props.article.title}</h2>
          <p>{props.article.description}</p>
        </div>
      </a>
    </div>
  );
};
