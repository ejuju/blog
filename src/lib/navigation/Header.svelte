<script lang="ts">
	import type { Link } from './link';
	import { sampleLinks } from './sample_links';
	import { slide } from 'svelte/transition';

	export let brandName: string = '';
	export const links: Link[] = sampleLinks;

	let menuIsVisible: boolean = false;
	function toggleMenuVisibility() {
		menuIsVisible = !menuIsVisible;

		if (menuIsVisible) document.body.style.overflowY = 'hidden';
		else document.body.style.overflowY = 'scroll';
	}
</script>

<header class="Header">
	<a class="BrandName" href="/">{brandName}</a>

	<button on:click={toggleMenuVisibility} aria-label="open menu" class:isCross={menuIsVisible}>
		<div />
		<div />
		<div />
	</button>

	{#if menuIsVisible}
		<nav transition:slide>
			{#each links as link}
				<a href={link.href}>{link.label}</a>
			{/each}
		</nav>
	{/if}
</header>

<style lang="scss">
	.Header {
		position: relative;
		display: flex;
		gap: 1rem;
		padding: 0 var(--space-side);
		border-bottom: var(--border);

		.BrandName {
			padding: 1rem 0;
			font-weight: 600;
			margin-right: auto;
		}

		button {
			padding: 1rem;
			position: relative;

			div {
				position: absolute;
				left: 0.5rem;

				$height: 0.1rem;
				$width: 1.5rem;

				background-color: currentColor;
				border-radius: 2px;
				transition-duration: 0.2s;
				transition-timing-function: ease-in-out;

				height: $height;
				width: $width;

				&:nth-of-type(1) {
					top: 1rem - calc($height / 2);
					transition-property: transform;
					transform-origin: center;
				}

				&:nth-of-type(2) {
					background-color: var(--clr-txt);
					top: 1.5rem - calc($height / 2);
					transition-property: opacity;
				}

				&:nth-of-type(3) {
					top: 2rem - calc($height / 2);
					transition-property: transform;
					transform-origin: center;
				}
			}

			&.isCross {
				div {
					&:nth-of-type(1) {
						transform: translateY(0.5rem) rotate(calc(-45deg));
					}
					&:nth-of-type(2) {
						opacity: 0;
					}
					&:nth-of-type(3) {
						transform: translateY(-0.5rem) rotate(calc(45deg));
					}
				}
			}
		}

		nav {
			padding: var(--space-page);
			position: absolute;
			top: calc(100% + var(--border-width));
			left: 0;
			width: 100%;
			height: calc(100vh - 2rem);
			font-weight: 600;

			background: var(--clr-bg);

			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}
	}
</style>
