import { getAgent } from "$lib/api";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const agent = await getAgent();
	const timeline = await agent.getTimeline();
	console.log(timeline.data.feed[0].post);
	
	return {
		timeline
	};
};

