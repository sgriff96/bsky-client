<script lang="ts">
	import FeedItem from "$lib/FeedItem.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div class="max-w-xl">
	{#if data.timeline.data.feed}
		{#each data.timeline.data.feed as item}
			<div class="pb-2">
				<FeedItem post={item.post} />
			</div>
		{/each}
	{/if}
</div>
