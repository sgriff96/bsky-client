import { getAgent } from "$lib/api";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
	const agent = await getAgent();
	let user;
	if (agent.session) {
		user = await agent.getProfile({ actor: agent.session?.did });
	}

	return {
		user
	};
};
