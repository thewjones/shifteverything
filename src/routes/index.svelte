<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import IntersectionObserver from "svelte-intersection-observer";

	import Section from '$lib/Section.svelte';
	import Types from '$lib/Types.svelte';
	import Benefits from '$lib/Benefits.svelte';
	import FeatureText from '$lib/FeatureText.svelte';
	import Form from '$lib/Form.svelte';



	let element;
	let intersecting;
	
	// import { page } from '$app/stores';
	import se from '$lib/assets/se.svg';
	import colours from '$lib/assets/colours.png';
	import bullitt from '$lib/assets/bullitt.svg';
	import ebullitt from '$lib/assets/ebullitt-home.webp';
	


</script>
<svelte:head>
	<title>Bullitt Cargo Bikes UK - Shift Everything</title>

</svelte:head>

<header class="px-5">
	<div class="max-w-screen-2xl mx-auto flex flex-col lg:flex-row bg-primary justify-center align-center items-center gap-8">
		
		
			<img class="mb-4 w-64"  src="{se}" alt="Shift Everything">
		
			<img class="mb-4 w-64 lg:ml-auto"  src="{bullitt}" alt="Bullitt">
		

	</div>	
</header>


<div>
	<Section>
		<IntersectionObserver {element} bind:intersecting>
			<img src="{ebullitt}" alt="Bullitt Bike">
		</IntersectionObserver>
	</Section>


	<Section bgcolour="bg-mushroom">
		<IntersectionObserver {element} bind:intersecting>	
		<FeatureText textcolour="text-white">UK specialists in Bullitt Cargo Bikes: true ultra-low emission urban transport from Copenhagen.<br>One bike that can adapt with you.</FeatureText>
		</IntersectionObserver>
	</Section>

	<Section nopadding>
		<img class="w-full" src="{colours}" >
	</Section>

	<Section bgcolour="bg-white" >
		<Types/>
	</Section>

	<Section bgcolour="bg-primary">
		<Benefits/>
	</Section>

	<Section bgcolour="bg-primary">
		<FeatureText  textcolour="text-accent">All enquiries: <a href="mailto:matt@shifteverything.cc">matt@shifteverything.cc</a></FeatureText>

	</Section>

</div>

<div class="max-w-screen-xl mx-auto flex flex-col justify-center align-center items-center gap-8 mt-5">

</div>	



<style>

.postcard {
	@apply opacity-0;
	@apply translate-y-20;
}

.intersect {
	@apply opacity-100;
	@apply transition-all;
	@apply duration-[2000ms];
	@apply ease-in-out;
	@apply translate-y-0;
}

</style>


