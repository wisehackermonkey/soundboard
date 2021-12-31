<script>
	import { createEventDispatcher } from 'svelte';
	
	let dispatch = createEventDispatcher();
	
	const icons = {
		play: "/button_normal.png",
		pause: "/button_pressed.png"
	}
	
  export let isPlaying;
	
</script>


<div id="btn-cont">
	<button id="play" on:click={() => dispatch('playPause')}>
		<img src={isPlaying ? icons.pause : icons.play} 
				 alt="play"/>
	</button>
</div>

<style>
	
	
	button { 
		border: none;
		font-size: 2.3rem;
		padding: 0;
		cursor: pointer;
		margin: 0;
		background-color: transparent;
	}
	
	button:active {
		background-color: transparent;
	}
	
	button img {
		width: 100%;
	}
</style>