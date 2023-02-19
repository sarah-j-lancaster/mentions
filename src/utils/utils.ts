import { MentionViewModel } from "@/pages";
import { Mention, TwitterMention } from "@/services/api/mentions";

export const isTwitterMention = (
  b: Mention | TwitterMention
): b is TwitterMention => {
  return (b as TwitterMention).source_type === "twitter";
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
        sourceName: "twitter.com",
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
