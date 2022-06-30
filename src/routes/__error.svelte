<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status} ${error?.message}`
			}
		};
	}
</script>

<script lang="ts">
	export let title: string = '';
</script>

<div class="Page">
	<h1>{title}</h1>
	<p>
		Go back to the <a href="/">home page</a>
	</p>
	<img src="/travolta-lost.gif" alt="Scene from Pulp Fiction: John Travolta seems lost" />
</div>

<style lang="scss">
	.Page {
		padding: var(--space-page);
		display: flex;
		flex-direction: column;
		row-gap: var(--space-top);

		img {
			width: 100%;
			max-width: 150px;
		}
	}
</style>
