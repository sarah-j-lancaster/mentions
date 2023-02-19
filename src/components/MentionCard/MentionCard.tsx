import { MentionViewModel } from "@/pages";
import styles from "../MentionCard/mention-card.module.css";

export const MentionCard = ({
  sourceName,
  sourceType,
  title,
  description,
  createdAt,
}: MentionViewModel) => {
  return (
    <div className={styles.container}>
      <div>{sourceType}</div>
      <div>
        <div className={styles.header}>
          <p>{sourceName}</p>
          <p>{createdAt}</p>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
