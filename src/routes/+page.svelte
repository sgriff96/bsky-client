<script lang="ts">
	import Feed from "$lib/Feed.svelte";
	import { AppBskyFeedDefs } from "@atproto/api";
	import type { PageData } from "./$types";

	export let data: PageData;

	if (AppBskyFeedDefs.isPostView(data.timeline.data.feed[0].post)) {
		console.log("It's a post view!", data.timeline.data.feed[0].post.record.text);
	}
</script>

<div class="flex justify-center max-h-1">
	{#if data.timeline.data.feed}
		<Feed posts={data.timeline.data.feed} />
	{/if}
</div>
