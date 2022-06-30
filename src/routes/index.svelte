<script lang="ts">
	import { sampleTags } from '$lib/blog/sample_tags';
	import Tag from '$lib/blog/Tag.svelte';

	import type { Post } from '../lib/blog/post';
	import PostPreview from '../lib/blog/PostPreview.svelte';
	import { samplePosts } from '../lib/blog/sample_posts';

	const topPosts: Post[] = [...samplePosts];
	const topTags: string[] = [...sampleTags];
</script>

<div class="Page">
	<section class="Intro">
		<h1>Just another developer blog</h1>
		<nav class="TopTags">
			{#each topTags as tag}
				<Tag slug={tag} />
			{/each}
		</nav>
	</section>

	<section class="TopPosts">
		{#each topPosts as post}
			<PostPreview {post} />
		{/each}
	</section>
</div>

<style lang="scss">
	.Page {
		padding: var(--space-page);
		display: flex;
		flex-direction: column;
		gap: 4rem;

		.Intro {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			.TopTags {
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
			}
		}

		.TopPosts {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
