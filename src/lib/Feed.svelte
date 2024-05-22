<script lang="ts">
	import type { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
	import FeedItem from "./FeedItem.svelte";

	export let posts: FeedViewPost[];
</script>

<div class="max-w-lg">
	{#each posts as post}
		<div class="pb-2">
			<FeedItem post={post.post} />
		</div>
	{/each}
</div>
