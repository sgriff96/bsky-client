import { getAgent } from "$lib/api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
	const agent = await getAgent();
	const timeline = await agent.getTimeline();
	let user;
	if (agent.session) {
		user = await agent.getProfile({ actor: agent.session?.did });
	}

	return {
		timeline,
		user
	};
};
