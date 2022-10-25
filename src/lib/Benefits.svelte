<script type="ts">

import ItemGrid from '$lib/ItemGrid.svelte';

</script>

<ItemGrid>

	<div class="item col-span-3 lg:col-span-1">
		<h3>Adaptable</h3>
		<p>Flexible cargo carrying options that adapt with you. Carry kids, pets, shopping, equipment, every thing.</p>
	</div>

	<div class="item col-span-3 lg:col-span-1">
		<h3>Quality Components</h3>
		<p>Its hardened aluminium frame, hydraulic disc brakes and premium components make it one of the toughest cargo bikes on the market.</p>
	</div>

	<div class="item col-span-3 lg:col-span-1">
		<h3>Danish Design</h3>
		<p>Designed in Copenhagen, we think it's the most thoughtfully designed, best looking cargo bike available.</p>
	</div>

	<div class="item col-span-3 lg:col-span-1">
		<h3>One size fits</h3>
<p>One-size, gender neutral frame geometry that can be ridden by anyone small or tall.</p>
</div>

<div class="item col-span-3 lg:col-span-1">
	<h3>Ten Colour Finishes</h3>
<p>It comes in colours everywhere. Go classic black or split the infinitive and boldly go with one of our radical colour options.</p>
</div>

<div class="item col-span-3 lg:col-span-1">
	<h3>Compact and Agile</h3>
<p>Compact frameset to negotiate UK's varying roads and cycleways.</p>
</div>

<div class="item col-span-3 lg:col-span-1">
	<h3>Cost Effective</h3>
<p>With minimal running costs, no fuel or parking cargo bikes are significantly cheaper per kilometre than a motor vehicle.</p>
</div>
<div class="item col-span-3 lg:col-span-1">
	<h3>True Decarbonisation</h3>
<p>Drastically lower your environmental impact when you travel. Say hello to the world around you.</p>
</div>
<div class="item col-span-3 lg:col-span-1">
	<h3>Built to your budget</h3>
<p>Build options to suit your budget. Ask us about a minimal single-speed cargo setup or a fully equiped family rig.</p>
</div>

</ItemGrid>

<style>

h3 {
	@apply text-accent;
	@apply text-4xl;
	@apply font-bold;
}

p {
	@apply text-black;
	@apply font-body;
}

img {
	@apply w-full;
}

</style>
