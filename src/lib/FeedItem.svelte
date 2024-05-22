<script lang="ts">
	import type { PostView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
	import * as Card from "$lib/components/ui/card";
	import * as Avatar from "$lib/components/ui/avatar";

	export let post: PostView;
</script>

<Card.Root>
	<Card.Header>
		<Avatar.Root>
			<Avatar.Image src={post.author.avatar} alt={post.author.handle} />
			<Avatar.Fallback>{post.author.handle}</Avatar.Fallback>
		</Avatar.Root>
		<Card.Title>{post.author.displayName}</Card.Title>
		<Card.Description>({post.author.handle})</Card.Description>
	</Card.Header>
	<Card.Content>
		{post.record.text}
	</Card.Content>
</Card.Root>
