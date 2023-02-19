import Head from "next/head";
import Image from "next/image";
import { Shrikhand } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { NextPage } from "next";
import { getAllMentions } from "@/services/api/mentions";
import { convertMentionsToViewModel } from "@/utils/utils";
import { MentionCard } from "@/components/MentionCard/MentionCard";

const headingFont = Shrikhand({ weight: "400", preload: false });

type HomeProps = {
  mentions: MentionViewModel[];
};

export type MentionViewModel = {
  sourceType: "blogs" | "web" | "forums" | "twitter";
  sourceName: string;
  createdAt: string;
  title: string;
  description: string;
};

const Home: NextPage<HomeProps> = ({ mentions }) => {
  return (
    <>
      <Head>
        <title>Mentions</title>
        <meta name="description" content="Displaying mentions from online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Image
          src={"/images/mention-img.png"}
          alt="Mini social media users border a giant computer"
          width={260}
          height={150}
          quality={100}
          priority
        />
        <h1 className={`${styles.title} ${headingFont.className}`}>Mentions</h1>
        <ul className={styles.grid}>
          {mentions.map((mention, index) => (
            <li key={`mention-${index}`}>
              <MentionCard {...mention} />
            </li>
          ))}
        </ul>
        <div className={styles.link}>
          <a
            href={`https://www.freepik.com/free-vector/tiny-people-customers-receive-messages-from-microblogging-service-microblog-platform-microblogging-market-microblog-marketing-service-concept-illustration_11669673.htm#query=mention%20social&position=23&from_view=search&track=ais`}
          >
            {`Image by vectorjuice`}
          </a>
          {` on Freepik`}
        </div>
      </main>
    </>
  );
};

Home.getInitialProps = async () => {
  const mentionsData = await getAllMentions();
  const mentions = convertMentionsToViewModel(mentionsData.mentions);
  return { mentions };
};

export default Home;
