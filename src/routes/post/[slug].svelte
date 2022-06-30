<script lang="ts">
	import type { Post } from '$lib/blog/post';
	import { samplePosts } from '$lib/blog/sample_posts';
	export let post: Post = samplePosts[0];
</script>

<section class="Page">
	<h1>{post.title}</h1>
	<p>Published on: {post.date}<br />{post.shortDescription}</p>
</section>
