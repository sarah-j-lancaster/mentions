export type Mention = {
  source_type: "blogs" | "web" | "forums";
  source_name: string;
  created_at: string;
  title: string;
  description: string;
};

type TwitterMetadata = {
  twitter: {
    id_str: string;
  };
};
export type TwitterMention = {
  source_type: "twitter";
  created_at: string;
  metadata: TwitterMetadata;
};

type MentionResponse = {
  mentions: (Mention | TwitterMention)[];
};

export const getAllMentions = async (): Promise<MentionResponse> => {
  const accountId =
    "1211464_AeNMIahCgk3jw4HbLt4GnmMeDnTk12IjqQlW4Z2B91G4YQft5QX8hmsjKKjQCPf8";
  const alertId = "2486175";
  const headers = { Authorization: `Bearer ${process.env.BEARER_TOKEN}` };
  const response = await fetch(
    `https://web.mention.com/api/accounts/${accountId}/alerts/${alertId}/mentions`,
    { headers }
  );

  return response.json();
};
