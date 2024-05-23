<script lang="ts">
	import type { PostView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";
	import * as Card from "$lib/components/ui/card";
	import * as Avatar from "$lib/components/ui/avatar";

	export let post: PostView;
	console.log(post.embed);
</script>

<div class="self-stretch min-w-full">
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
		</Card.Content>
	</Card.Root>
</div>
