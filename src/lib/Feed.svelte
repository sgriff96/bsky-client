<script lang="ts">
	import type { FeedViewPost } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
	import FeedItem from "./FeedItem.svelte";
	import Masonry from "svelte-bricks";

	export let posts: FeedViewPost[];

	$: newPosts = posts.map((post, i) => {
		return {
			id: i,
			...post
		};
	});

	let [minColWidth, maxColWidth, gap] = [400, 600, 20];
</script>

<Masonry items={newPosts} {minColWidth} {maxColWidth} {gap} let:item>
	<FeedItem post={item.post} />
</Masonry>
