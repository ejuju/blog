<script lang="ts">
	import '../styles/manifest.scss';

	import Footer from '$lib/navigation/Footer.svelte';
	import Header from '$lib/navigation/Header.svelte';
</script>

<Header brandName="Just a blog" />
<slot />
<Footer />
