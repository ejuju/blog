<script lang="ts">
	import { slide } from 'svelte/transition';
	import Tag from './Tag.svelte';

	export let title: string;
	export let shortDescription: string;
	export let tags: string[];
</script>

<section class="PostPreview">
	<h2>{title}</h2>
	<p>{shortDescription}</p>
	<nav>
		{#each tags as tag}
			<Tag slug={tag} />
		{/each}
	</nav>
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
