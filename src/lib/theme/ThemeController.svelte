<script lang="ts">
	import { theme, type Theme } from './theme';

	export let availableThemes: Theme[];

	function setTheme(t: Theme) {
		theme.set(t);
		localStorage.setItem('theme', JSON.stringify(t));
	}
</script>

<section class="ThemeController">
	{#each availableThemes as availableTheme}
		<button on:click={() => setTheme(availableTheme)}>{availableTheme.name}</button>
	{/each}
</section>

<style lang="scss">
	.ThemeController {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;

		button {
			display: flex;
			padding: 0.25rem 1rem;
			border: var(--border);
			border-radius: var(--border-radius);
		}
	}
</style>
