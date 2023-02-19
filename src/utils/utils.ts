import { MentionViewModel } from "@/pages";
import { Mention, TwitterMention } from "@/services/api/mentions";
import { title } from "process";

export const isTwitterMention = (
  b: Mention | TwitterMention
): b is TwitterMention => {
  return (b as TwitterMention).source_type === "twitter";
};

const monthShortcutMap = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
export const formatDate = (rawDate: string): string => {
  const date = new Date(rawDate);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
};

export const convertMentionsToViewModel = (
  mentions: (TwitterMention | Mention)[]
): MentionViewModel[] =>
  mentions.map((mention) => {
    if (isTwitterMention(mention)) {
      const {
        source_type,
        created_at,
        metadata: {
          twitter: { id_str },
        },
      } = mention;
      const formattedDate = formatDate(created_at);

      return {
        sourceType: source_type,
        sourceName: "Twitter.com",
        createdAt: formattedDate,
        title: "You have been mentioned on twitter",
        description: `View tweet at https://twitter.com/i/web/status/${id_str}`,
      };
    } else {
      const { source_name, source_type, created_at, title, description } =
        mention;
      const formattedDate = formatDate(created_at);
      return {
        sourceType: source_type,
        sourceName: source_name,
        createdAt: formattedDate,
        title,
        description,
      };
    }
  });
