import { BskyAgent } from "@atproto/api";

const bskyAgent = new BskyAgent({
	service: "https://bsky.social"
});

export const getAgent = async () => {
	if (!bskyAgent.hasSession) {
		console.log("Logging in...");
		await bskyAgent.login({
			identifier: import.meta.env.USERNAME,
			password: import.meta.env.PASSWORD,
		});
	}

	return bskyAgent;
};
