<script>
	import ThemeController from '$lib/theme/ThemeController.svelte';
	import { availableThemes } from '$lib/theme/theme';
</script>

<footer class="Footer">
	<p>Made with passion using SvelteKit - {new Date().getFullYear()}</p>

	<section class="Theme">
		<span>Switch theme</span>
		<ThemeController {availableThemes} />
	</section>

	<section class="Social">
		<span>External links</span>
		<a href="https://github.com/ejuju" target="_blank">Github</a>
		<a href="https://croissant.studio" target="_blank">Website</a>
	</section>
</footer>

<style lang="scss">
	.Footer {
		padding: var(--space-page);
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.Theme {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			align-items: baseline;

			span {
				font-weight: 600;
			}
		}

		.Social {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			align-items: baseline;

			span {
				font-weight: 600;
			}
		}
	}
</style>
