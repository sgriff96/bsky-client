<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar";
	import type { ProfileViewDetailed } from "@atproto/api/dist/client/types/app/bsky/actor/defs";

	export let user: ProfileViewDetailed;
</script>

<nav class="flex justify-between gap-2 p-2 border-2 rounded-sm">
	<div class="flex gap-2">
		<a href="/">home</a>
		<a href="/blog">blog</a>
	</div>
	<Avatar.Root>
		<Avatar.Image src={user.avatar} alt={user.handle} />
		<Avatar.Fallback>{user.handle}</Avatar.Fallback>
	</Avatar.Root>
</nav>
