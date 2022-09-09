
<div class="itemgrid">

	<slot></slot>

</div>

<style>

.itemgrid {
	@apply grid;
	@apply grid-cols-3;
	@apply gap-32;
	@apply w-full;
}

.itemgrid :global(.item) {
	@apply flex;
	@apply flex-col;
	@apply gap-10;
}

</style>
