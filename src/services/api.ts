import { BskyAgent } from "@atproto/api";

const agent = new BskyAgent({
  service: "https://bsky.social",
});

export const getAgent = async() => {
  await agent.login({
    identifier: 'sgriffin.bsky.social',
    password: 'C8WnuXew-Zutm9j'
  });

  return agent;
}