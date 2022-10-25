<script type="ts">

import base from '$lib/assets/bikeillustrations/base.svg';
import family from '$lib/assets/bikeillustrations/family.svg';
import dog from '$lib/assets/bikeillustrations/dog.svg';
import electric from '$lib/assets/bikeillustrations/electric.svg';
import business from '$lib/assets/bikeillustrations/business.svg';
import tour from '$lib/assets/bikeillustrations/tour.svg';

import ItemGrid from '$lib/ItemGrid.svelte';

</script>

<ItemGrid>

	<div class="item col-span-3 lg:col-span-1">
		<img src="{base}"/>
		<p>A Project Base</p>
	</div>

	<div class="item col-span-3 lg:col-span-1">
		<img src="{family}"/>
		<p>Transport for your family</p>
	</div>

	<div class="item col-span-3 lg:col-span-1">
		<img src="{dog}"/>
		<p>.... and your dog</p>
	</div>

	<div class="item col-span-3 lg:col-span-1">
<img src="{electric}"/>
<p>Power-assist options</p>
</div>

<div class="item col-span-3 lg:col-span-1">
<img src="{business}"/>
<p>Decarbonise your business</p>
</div>

<div class="item col-span-3 lg:col-span-1">
<img src="{tour}"/>
<p>Tour</p>
</div>

</ItemGrid>

<style>


p {
	@apply text-secondary;
	@apply text-3xl;
	@apply text-center;
}

img {
	@apply w-full;
}

</style>
