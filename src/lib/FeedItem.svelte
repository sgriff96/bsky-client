<script lang="ts">
	import type { PostView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
	import * as Card from "$lib/components/ui/card";
	import * as Avatar from "$lib/components/ui/avatar";
	import Reply from "lucide-svelte/icons/reply";
	import { Button } from "$lib/components/ui/button";

	export let post: PostView;
</script>

<Card.Root>
	<Card.Header>
		<div class="flex flex-row items-center gap-2">
			<Avatar.Root>
				<Avatar.Image src={post.author.avatar} alt={post.author.handle} />
				<Avatar.Fallback>{post.author.handle}</Avatar.Fallback>
			</Avatar.Root>
			<div>
				<Card.Title>{post.author.displayName}</Card.Title>
				<Card.Description>({post.author.handle})</Card.Description>
			</div>
		</div>
	</Card.Header>
	<Card.Content>
		{post.record.text}
		{#if post.embed?.images && post.embed.images.length > 0}
			<img src={post.embed?.images[0].fullsize} />
		{/if}
	</Card.Content>
	<Card.Footer>
		<Button variant="outline" size="icon"><Reply class="h-4 w-4" /></Button>
	</Card.Footer>
</Card.Root>
