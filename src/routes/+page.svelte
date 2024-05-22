<script lang="ts">
	import FeedItem from "$lib/FeedItem.svelte";
import type { PageData } from "./$types";

  export let data: PageData;
  console.log(data.timeline.data.feed)
</script>

<h1>Welcome to SvelteKit</h1>
{#if data.timeline.data.feed}
  {#each data.timeline.data.feed as item}
    <FeedItem post={item.post} />
  {/each}
{/if}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
