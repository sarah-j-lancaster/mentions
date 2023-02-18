export const getAllMentions = async (): Promise<any> => {
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
