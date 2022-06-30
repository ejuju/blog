<script lang="ts">
	import { page } from '$app/stores';
	import type { Post } from '$lib/blog/post';
	import PostPreview from '$lib/blog/PostPreview.svelte';
	import { samplePosts } from '$lib/blog/sample_posts';

	// get posts for this tag
	let posts: Post[] = [...samplePosts];
</script>

<div class="Page">
	<h1>#{$page.params.slug}</h1>

	<section class="Posts">
		{#each posts as post}
			<PostPreview {...post} />
		{:else}
			<p>No post found for this tag</p>
		{/each}
	</section>
</div>

<style lang="scss">
	.Page {
		padding: var(--space-page);
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.Posts {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}
	}
</style>
