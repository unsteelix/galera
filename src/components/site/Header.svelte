<script>
	const logos = [
		'logo-1',
		'logo-2',
		'logo-3',
		'logo-4',
		'logo-5',
		'logo-6',
		'logo-7',
		'logo-8',
		'logo-9'
	];

	const gerRandomLogo = () => {
		const logo = logos[Math.floor(Math.random() * logos.length)];
		return `/logos/${logo}.svg`;
	};

	let logo = gerRandomLogo();
</script>

<div class="header">
	<img class="logo" src={logo} alt="Logo" on:click={() => (window.location.href = '/')} />
</div>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		color: whitesmoke;
		font-size: 30px;
		padding: 10px 10px;
		z-index: 10;
		width: 200px;
	}
	.header:hover .logo {
		left: 0px;
	}
	a,
	.logo {
		position: relative;
		left: -50px;
		text-decoration: none;
		color: cornflowerblue;
		cursor: pointer;
		width: 40px;
		transition: 0.2s all;
	}
</style>
