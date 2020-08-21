<script>
	import EventEmitter from 'events'
	import {inherits} from 'util'

	import si from 'search-index'
	import Sidxgetjsonurl from './SidxGetJSONURL.svelte'
	
</script>

<main class="sidxApp">
	<h1>sidxApp</h1>

	<h2>Data in</h2>
	<Sidxgetjsonurl />
</main>

<style>
	main {
		padding: 5px;
	}
</style>