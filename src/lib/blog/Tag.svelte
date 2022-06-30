<script lang="ts">
	export let slug: string;
</script>

<a class="Tag" href="/tag/{slug}">
	#{slug}
</a>

<style lang="scss">
	.Tag {
		padding: 0.25rem 0.75rem;
		border-radius: var(--border-radius);
		background: var(--clr-bg-1);
	}
</style>
