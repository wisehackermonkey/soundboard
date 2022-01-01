<script>
	export let path = '';
	export let color = "";
 	export let title = '';
	import TrackHeading from '$lib/TrackHeading.svelte';
	import Controls from '$lib/Controls.svelte';
	import { onMount } from 'svelte';
	import {fade} from "svelte/transition";
	$: loading = false;
	// Get Audio track
	let trackIndex = 0;
	// $: console.log(trackIndex)
	let audioFile; // =new Audio(path);
	// audioFile.preload = "auto"
	let trackTitle = title;

	const loadTrack = () => {
		audioFile = new Audio(path);
		audioFile.onloadedmetadata = () => {
			updateTime();
		};

		trackTitle = title;
	};

	let trackTimer;

	function updateTime() {
		if (audioFile.ended) {
			toggleTimeRunning();
		}
	}

	const toggleTimeRunning = () => {
		if (audioFile.ended) {
			isPlaying = false;
			clearInterval(trackTimer);
			console.log(`Ended = ${audioFile.ended}`);
		} else {
			trackTimer = setInterval(updateTime, 100);
		}
	};

	// Controls
	let isPlaying = false;
	$: console.log(`isPlaying = ${isPlaying}`);

	const playPauseAudio = () => {
		if (audioFile.paused) {
			toggleTimeRunning();
			audioFile.play();
			isPlaying = true;
		} else {
			toggleTimeRunning();
			audioFile.pause();
			isPlaying = false;
		}
	};

	// Playlist
	const handleTrack = (e) => {
		if (!isPlaying) {
			trackIndex = Number(e.target.dataset.trackId);
			loadTrack();
			playPauseAudio(); // auto play
		} else {
			isPlaying = false;
			audioFile.pause();
			loadTrack();
			playPauseAudio(); // auto play
		}
	};
	onMount(() => {
		loadTrack();
	});
	let bg_color = "background: blue;";
</script>

<main>
	<section transition:fade class="player-cont" style="{`background: ${color}`}">
		<TrackHeading {trackTitle} />

		<Controls {isPlaying} on:playPause={playPauseAudio} />
	</section>
</main>

<style>
	.player-cont {
		margin: 10px;
		width: 96px;
		/* height: 170px; */
		padding: 0.7rem 1.5rem 10px;
		box-shadow: 0 0 5px black;
		/* background: {}; */
		color: #bbb;
		border-radius: 21px ;
	}
</style>
