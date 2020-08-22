<script>
	import Sidxgetjsonurl from './SidxGetJSONURL.svelte'
	import Sidxindexcontent from './SidxIndexContent.svelte'
	
</script>

<main>
	<h1>sidxApp</h1>

	<h2>Data in</h2>
	<Sidxgetjsonurl />
	<Sidxindexcontent />

	<h2>Data out</h2>
</main>

<style>
	:global(body) {
		padding:15px;
	}
	:global(.component) {
    padding: 15px;
		background:#eeeeee;
		margin-bottom:15px;
	}
	:global(.json) {
    height:6rem;
    overflow:scroll;
    background:#dddddd;
    padding:5px;
    margin-bottom:0;
  }
  :global(.component h3) {
    margin-top:0;
  }
</style>