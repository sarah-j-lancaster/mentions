import { Mention, TwitterMention } from "@/services/api/mentions";
import { convertMentionsToViewModel, isTwitterMention } from "./utils";

const twitterMention: TwitterMention = {
  source_type: "twitter",
  created_at: "2023-02-18T14:26:43.0+00:00",
  metadata: {
    twitter: {
      id_str: "1626946180667113473",
    },
  },
};
const webMention: Mention = {
  source_type: "web",
  source_name: "www.mavephics.com",
  created_at: "2023-02-18T19:04:24.0+00:00",
  title:
    "The 10 Best Social Media tools | Media Management | Content Marketing",
  description: "https://www.mention.com/en",
};
const forumsMention: Mention = {
  source_type: "forums",
  source_name: "thezenweb.com",
  created_at: "2023-02-17T22:33:45.0+00:00",
  title: "About backlinks high da",
  description:
    "Utilize a Instrument like BuzzSumo and Mention.com to uncover mentions of your brand name on the web.",
};
const blogsMention: Mention = {
  source_type: "blogs",
  source_name: "mention.com",
  created_at: "2023-02-17T12:19:25.0+00:00",
  title: "7 Best Data Visualization Examples to Boost Your Campaigns",
  description: "https://info.mention.com/campaign-blog-digital-marketing",
};

it.each`
  mention           | result   | type
  ${twitterMention} | ${true}  | ${"twitter"}
  ${webMention}     | ${false} | ${"web"}
  ${blogsMention}   | ${false} | ${"blogs"}
  ${forumsMention}  | ${false} | ${"forums"}
`("returns $result for $type mention", ({ mention, result }) => {
  const actual = isTwitterMention(mention);
  expect(actual).toBe(result);
});

describe("Mention view model", () => {
  let mockDate: any;

  // Ensuring tests work for in NZ and FR timezones
  beforeAll(() => {
    mockDate = jest
      .spyOn(Date.prototype, "toLocaleDateString")
      .mockReturnValue("18 Feb");
  });

  afterAll(() => {
    mockDate.mockRestore();
  });

  const mentionsUI = [
    {
      createdAt: "18 Feb",
      description:
        "View tweet at https://twitter.com/i/web/status/1626946180667113473",
      sourceName: "twitter.com",
      sourceType: "twitter",
      title: "You have been mentioned on twitter",
    },
    {
      createdAt: "18 Feb",
      description: "https://www.mention.com/en",
      sourceName: "www.mavephics.com",
      sourceType: "web",
      title:
        "The 10 Best Social Media tools | Media Management | Content Marketing",
    },
    {
      createdAt: "18 Feb",
      description:
        "Utilize a Instrument like BuzzSumo and Mention.com to uncover mentions of your brand name on the web.",
      sourceName: "thezenweb.com",
      sourceType: "forums",
      title: "About backlinks high da",
    },
    {
      createdAt: "18 Feb",
      description: "https://info.mention.com/campaign-blog-digital-marketing",
      sourceName: "mention.com",
      sourceType: "blogs",
      title: "7 Best Data Visualization Examples to Boost Your Campaigns",
    },
  ];

  it("transforms mention data into the viewmodel", () => {
    const allTypesMentions = [
      twitterMention,
      webMention,
      forumsMention,
      blogsMention,
    ];
    const viewModel = convertMentionsToViewModel(allTypesMentions);
    expect(viewModel).toEqual(mentionsUI);
  });
});
