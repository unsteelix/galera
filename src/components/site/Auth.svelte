<script>
	export let isAdmin;
	let editMode = false;

	const onInputChange = async (e) => {
		const val = e.target.value;

		const res = await fetch(`/api/auth/${val}`);
		if (res.ok) {
			await res.json();
			isAdmin = true;
			window.location.reload();
		}
	};

	const logoutBtn = () => {
		const name = 'token';
		document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		isAdmin = false;
		window.location.reload();
	};

	const initInput = (el) => {
		el.focus();
	};
</script>

<div class="auth">
	{#if isAdmin}
		<div class="admin-mode">
			<div class="logout-btn" on:click={logoutBtn}>logout</div>
		</div>
	{:else}
		<div class="not-admin-mode" on:click={() => (editMode = !editMode)}>
			{#if editMode}
				<input on:keyup={onInputChange} use:initInput />
			{:else}
				login
			{/if}
		</div>
	{/if}
</div>

<style>
	.auth {
		border: 1px solid white;
		border-radius: 8px;
		text-align: center;
		width: 120px;
	}
	.logout-btn {
		color: white;
	}
	input {
		width: 100%;
	}
</style>
