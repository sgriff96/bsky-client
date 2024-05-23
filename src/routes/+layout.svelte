<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
	import "../app.css";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<div class="m-2">
	{#if data?.user?.data}
		<Navbar user={data.user.data} />
	{/if}
	<slot />
</div>
