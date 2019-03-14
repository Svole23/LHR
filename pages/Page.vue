<template>
	<div>
		<h1>Default Page (Page.vue)</h1>
	</div>
</template>

<script>
import BasePage from '@/plugins/mixins/BasePage'

export default {
	name: 'Page',
  mixins: [
    BasePage
  ],
	props: [
		'model'
	]
}
</script>

<style lang="scss" scoped>

</style>
