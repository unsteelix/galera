<script context="module">
	import Header from '../components/site/Header.svelte';
	import Footer from '../components/site/Footer.svelte';
	import reset from '../../static/reset.css';
	import main from '../../static/main.css';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ session }) {
		const { isAdmin } = session;

		return {
			props: {
				isAdmin
			}
		};
	}
</script>

<script>
	export let isAdmin;
</script>

<Header />
<div class="content">
	<slot />
</div>
<Footer {isAdmin} />

<style>
	.content {
		width: 100%;
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
</style>
