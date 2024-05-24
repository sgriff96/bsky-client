<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
	import "../app.css";
	import type { LayoutData } from "./$types";
	import { ModeWatcher } from "mode-watcher";

	export let data: LayoutData;
</script>

<ModeWatcher />
<div class="m-2">
	{#if data?.user?.data}
		<Navbar user={data.user.data} />
	{/if}
	<slot />
</div>
