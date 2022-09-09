<script type="ts">
    export let textcolour: string;
</script>

<p class="{textcolour}"><slot></slot></p>

<style>

p {
	@apply text-center;
	@apply font-bold;
	@apply text-4xl;
	@apply leading-normal;
	@apply max-w-screen-lg;
}

</style>
