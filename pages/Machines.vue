<template>
	<div class="page page--machines">
		<section-machines-hero/>
		<div class="machine-category">
				<section-machines-category 
					v-for="(category,index) in categories" 
					:key="index"
					:category="category" />
			</div>
	</div>
</template>

<script>
	import SectionMachinesHero from '@/components/machines/SectionMachinesHero'
	import SectionMachinesCategory from '@/components/machines/SectionMachinesCategory'
	export default {
		name: 'machines',
		
		components: {
			SectionMachinesHero,
			SectionMachinesCategory
		},
		props: [
		'model'
		],
		computed: {
			categories () {
				return this.$store.getters.machineCategories
			}
		}
	}
</script>

<style lang="scss" scoped>
.machine-category	{
	padding-top: 0;
	padding-bottom: $section-bottom;

	@include media-breakpoint-up(xl) {
		padding-bottom: 0;
	}
}
</style>