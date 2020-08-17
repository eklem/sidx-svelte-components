<script>
	import EventEmitter from 'events'
	import {inherits} from 'util'

	import si from 'search-index'
	export let name

	const idx =  si({ name: 'svelte-idx' })

	const readJSONData = function (url) {
		console.log('soon to read JSON data')
		fetch('https://raw.githubusercontent.com/eklem/dataset-vinmonopolet/master/dataset-vinmonopolet-sparkling.json')
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				return response.json()
			})	
			.then(JSONdata => {
				indexJSONData(JSONdata)
			})
			.catch(err => {
				console.log('Error while reading data: \n' + err.message)
			})
	}

	const indexJSONData = function (data) {
		console.log('soon indexing data: ' + JSON.stringify(data))
		idx.PUT(data)
			.then(message => {
				console.log('Data indexed. Number of documents indexed: ' + message)
			})
			.catch(err => {
				console.log('Error while indexing: \n' + err.message)
			})
	}

	readJSONData()
	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>