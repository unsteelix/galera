<script>
	import Cookies from 'js-cookie';

	export let isAdmin;

	let editMode = false;
	const LoginBtnText = 'Login';
	const LogoutBtnText = 'Logout';

	const onInputChange = async (e) => {
		const val = e.target.value;

		if (val.length >= 4) {
			const res = await fetch(`/api/auth/${val}`);
			if (res.ok) {
				const token = await res.text();

				Cookies.set('token', token, { expires: 7 });
				isAdmin = true;
				window.location.reload();
			}
		}
	};

	const logoutBtn = () => {
		Cookies.remove('token');
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
			<div class="logout-btn" on:click={logoutBtn}>{LogoutBtnText}</div>
		</div>
	{:else}
		<div class="not-admin-mode" on:click={() => (editMode = !editMode)}>
			{#if editMode}
				<input on:keyup={onInputChange} use:initInput />
			{:else}
				<div class="login-btn">{LoginBtnText}</div>
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
	.logout-btn,
	.login-btn {
		cursor: pointer;
	}
	input {
		width: 100%;
	}
</style>
