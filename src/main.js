import idxApp from './idxApp.svelte';

const idxapp = new idxApp({
	target: document.body,
	props: {
		name: 'svelte-idx-components'
	}
});

export default idxapp;