<script lang="ts">
	import type { Post } from '$lib/blog/post';
	export let post: Post;
</script>

<section class="Page">
	<h1>{post.title}</h1>
	<p>Published on: {post.date}<br />{post.shortDescription}</p>
</section>
