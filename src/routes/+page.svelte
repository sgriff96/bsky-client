<script lang="ts">
	import Feed from "$lib/Feed.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<div>
	{#if data.timeline.data.feed}
		<Feed posts={data.timeline.data.feed} />
	{/if}
</div>
