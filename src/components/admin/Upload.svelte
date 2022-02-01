<script>
	import axios from 'axios';
	import constants from '$lib/utils/constants';

	export let uploadCallback;

	let fileinput;
	let details;
	let files = [];
	$: console.log('fileinput', fileinput, 'files', files);

	let isLoading = false;

	const onFileSelected = (e) => {
		details = '';
		files = [];

		Object.values(e.target.files).forEach((file) => {
			const { name, size, type } = file;
			console.log(name, size, type);
			files.push(file);
			const sizeMB = Number.parseFloat(size / 1000 / 1000).toFixed(1);

			details += `${type.split('/')[1]} | ${sizeMB}MB | ${name}<br>`;
		});

		console.log('avatar', details);
	};

	const resetForm = () => {
		files = [];
		details = '';
		isLoading = false;
	};

	const uploadBtnClick = () => {
		if (files.length > 0) {
			isLoading = true;

			const formData = new FormData();

			files.forEach((file) => {
				formData.append('files[]', file);
			});

			axios
				.post(`${constants.picolaDomain}/upload`, formData, {
					headers: {
						'Content-type': 'multipart/form-data'
					}
				})
				.then(function (res) {
					console.log('RES', res);
					resetForm();

					let detailText = '';
					let callbackText = '';

					res.data.forEach((el) => {
						detailText += `<div style="margin-bottom: 5px">${el.data.id}</div>`;
						callbackText += `${el.data.id}\n`;
					});

					details = detailText;
					uploadCallback(callbackText);
				})
				.catch(function (e) {
					console.error(e.message);
					details = e.message;
					resetForm();
				});
		}
	};
</script>

<div class="form">
	{#if isLoading}
		Loading...
	{:else}
		{#if details}
			<div class="details">{@html details}</div>
		{/if}

		<div class="buttons">
			<div
				class="pick-button"
				on:click={() => {
					fileinput.click();
				}}
			>
				Pick Images
			</div>

			{#if files.length > 0}
				<div class="upload-btn" on:click={uploadBtnClick}>upload</div>
			{/if}
		</div>
	{/if}

	<input
		multiple
		name="upload-input"
		style="display:none"
		type="file"
		on:change={(e) => onFileSelected(e)}
		bind:this={fileinput}
	/>
</div>

<style>
	.form {
		border: 2px solid rebeccapurple;
		position: relative;
		width: 500px;
	}
	.details {
		padding: 10px;
		position: absolute;
		bottom: 56px;
		/* left: -2px; */
		right: 0px;
		background-color: white;
		border: 2px solid #3c3c3c;
	}
	.buttons {
		display: flex;
		padding: 10px;
	}
	.pick-button {
		cursor: pointer;
	}
	.upload-btn {
		cursor: pointer;
		margin-left: 20px;
	}
</style>
