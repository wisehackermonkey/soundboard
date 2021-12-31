<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import { soundfx } from './soundfx.js';
	import SoundButton from '$lib/SoundButton.svelte';
	let name = 'world';

	let formateFxURL = (fx_name) => {
		return `https://www.myinstants.com/instant/${fx_name}/embed/`;
	};
	let formateAudioUrl = (fx_name) => `/sound/${fx_name}.mp3`;
	let formateSoundObject = (obj) => {
		obj.url = formateAudioUrl(obj.url);
		return obj;
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>
<main id="masonry-root">
	<h1>Sound FX Board by oran</h1>

	{#each soundfx as sound}
		<!-- 		 <iframe width="110" height="200" src={formateFxURL(sound.url)} frameborder="0" scrolling="no"></iframe> -->
		<!-- {console.log( formateAudioUrl(sound.url))}  -->
		<SoundButton id="masonry-cell" title={sound.name} path={formateAudioUrl(sound.url)} />
	{/each}
</main>
<section>
	<h1>Sound FX Board by oran</h1>

	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
