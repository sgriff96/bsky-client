<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar";

	export let user;
</script>

<nav class="flex justify-between gap-2 p-2 border-2 rounded-sm">
	<div class="flex gap-2">
		<a href="/">home</a>
		<a href="/blog">blog</a>
	</div>
	<Avatar.Root>
		<Avatar.Image src={post.author.avatar} alt={post.author.handle} />
		<Avatar.Fallback>{post.author.handle}</Avatar.Fallback>
	</Avatar.Root>
</nav>
