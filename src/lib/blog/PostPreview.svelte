<script lang="ts">
	import type { Post } from './post';
	import Tag from './Tag.svelte';

	export let post: Post;
</script>

<section class="PostPreview">
	<h2>{post.title}</h2>
	<span>Last update: {post.date.toLocaleDateString()}</span>
	<p>{post.shortDescription}</p>
	<nav>
		{#each post.tags as tag}
			<Tag slug={tag} />
		{/each}
	</nav>
	<a href={post.slug} class="btn">Read full post</a>
</section>

<style lang="scss">
	.PostPreview {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border: var(--border);

		nav {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}
	}
</style>
