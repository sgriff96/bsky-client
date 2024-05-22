<script lang="ts">
	import type { PostView } from "@atproto/api/dist/client/types/app/bsky/feed/defs";

  export let post: PostView;
</script>

<p>{post.author.displayName} ({post.author.handle})</p>
<p>{post.record.text}</p>