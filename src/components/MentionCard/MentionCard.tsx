import { MentionViewModel } from "@/pages";
import Image from "next/image";
import styles from "../MentionCard/mention-card.module.css";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

const imageMap: { [Key in MentionViewModel["sourceType"]]: string } = {
  twitter: "/images/twitter.png",
  forums: "/images/forum.png",
  blogs: "/images/blog.png",
  web: "/images/web.png",
};

export const MentionCard = ({
  sourceName,
  sourceType,
  title,
  description,
  createdAt,
}: MentionViewModel) => {
  return (
    <div className={`${styles.container} ${quicksand.className}`}>
      <Image
        src={imageMap[sourceType]}
        alt={`${sourceType} icon`}
        width={50}
        height={50}
      />
      <div className={styles.content}>
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
