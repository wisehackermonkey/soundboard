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

<!-- <section> -->
	<h1>Sound FX Board by oran</h1>
	<div class="masonry-root">
		
		<!-- <tbody>			<tr> -->
				{#each soundfx as sound, i}
					<!-- 		 <iframe width="110" height="200" src={formateFxURL(sound.url)} frameborder="0" scrolling="no"></iframe> -->
					<!-- {console.log( formateAudioUrl(sound.url))}  -->

					<!-- <td> -->
						<SoundButton class="masonry-cells" title={sound.name} path={formateAudioUrl(sound.url)} />
					<!-- </td> -->
				{/each}
			<!-- </tr></tbody> -->
	</div>
<!-- </section> -->

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.masonry-root {
		display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: flex-end;
	background-color: red;
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
