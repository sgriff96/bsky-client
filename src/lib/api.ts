import { BskyAgent } from "@atproto/api";

const bskyAgent = new BskyAgent({
	service: "https://bsky.social"
});

export const getAgent = async () => {
	if (!bskyAgent.hasSession) {
		console.log("Logging in...");
		await bskyAgent.login({
			identifier: "sgriffin.bsky.social",
			password: "C8WnuXew-Zutm9j"
		});
	}

	return bskyAgent;
};
