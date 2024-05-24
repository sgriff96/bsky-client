<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar";
	import type { ProfileViewDetailed } from "@atproto/api/dist/client/types/app/bsky/actor/defs";
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";

	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";

	export let user: ProfileViewDetailed;
</script>

<nav class="flex justify-between gap-2 p-2 border-2 rounded-sm mb-2">
	<div class="flex gap-2">
		<Button href="/" variant="ghost">Home</Button>
		<Button href="/discover" variant="ghost">Discover</Button>
	</div>
	<div class="flex flex-row gap-4">
		<Button on:click={toggleMode} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
		<Avatar.Root>
			<Avatar.Image src={user.avatar} alt={user.handle} />
			<Avatar.Fallback>{user.handle}</Avatar.Fallback>
		</Avatar.Root>
	</div>
</nav>
