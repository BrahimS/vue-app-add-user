<template>
  <div id="app">
	<div class="container mt-4">
		<label>Name:</label>
		<input type="text" :model="name">
		<button class="btn btn-success" @click.prevent="handelSubmit()">Add</button>
	</div>
	<div class="container">
	<p>here</p>
		<ul>
			<li v-for="personName of names" :key="personName['.key']">{{personName.name}}</li>
		</ul>
	</div>
  </div>
</template>

<script>
import { namesRef } from './firebase';
export default {
  name: 'app',
  data () {
    return {
      name: ':\u{1F620}',
    }
	},
	firebase: {
			names : namesRef
	},
	methods: {
		handelSubmit() {
			namesRef.push({ name: this.name, edit: false })
		}
	}
}
</script>

<style lang="scss">

</style>
