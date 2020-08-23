<script>
	import Idxgetjsonurl from './IdxGetJSONURL.svelte'
	import Idxindexcontent from './IdxIndexContent.svelte'
	import Idxsearchsimple from './IdxSearchSimple.svelte'
</script>

<main>
	<h1>idxApp</h1>

	<h2>Data in</h2>
	<Idxgetjsonurl />
	<Idxindexcontent />

	<h2>Data out</h2>
	<Idxsearchsimple />
</main>

<style>
	:global(body) {
		padding:15px;
	}
	:global(.idxComponent) {
    padding: 15px;
		background:#eeeeee;
		margin-bottom:15px;
	}
	:global(.json) {
    height:6rem;
    overflow-y:scroll;
    background:#dddddd;
    padding:5px;
    margin-bottom:0;
  }
  :global(.idxComponent h3) {
    margin-top:0;
  }
</style>