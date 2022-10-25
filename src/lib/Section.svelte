<script type="ts">
    export let bgcolour: string, nopadding: boolean, id: string; 
</script>

<section id="{id}" class="px-5 {bgcolour} {(nopadding) ? '' : 'py-24'} flex align-center relative">
	<div>
		<slot></slot>
	</div>
</section>

<style>

div {
	@apply max-w-screen-2xl;
	@apply mx-auto;
	@apply w-full;
	@apply h-auto;
	@apply flex;
	@apply flex-col;
	@apply items-center;
	
}
</style>
