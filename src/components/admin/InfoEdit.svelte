<script>
	import { uid } from 'uid';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import slugify from 'slugify';
	import constants from '../../lib/utils/constants';

	let listPost = [];

	onMount(async () => {
		const res = await axios('/api/posts/all');
		const { data } = res;

		listPost = objToList(data);
	});

	const objToList = (obj) => {
		let res = [];
		for (let id in obj) {
			let val = obj[id];
			res.push({
				id,
				...val
			});
		}
		return res;
	};

	let newPost = () => ({
		id: uid(14),
		fullPath: '',
		path: '',
		cover: '',
		background: '',
		title: '',
		date: '',
		priority: 100,
		isFolder: false,
		toPage: 'some-folder', // for folders
		isHidden: false,
		data: ''
	});

	const addBtnClick = () => {
		listPost = [newPost(), ...listPost];
	};

	const saveBtnClick = async () => {
		let data = {};
		listPost.forEach((el) => {
			data[el.id] = {
				...el
			};
		});

		const res = await axios({
			method: 'post',
			url: `/api/posts/update`,
			data
		});

		listPost = objToList(res.data);
	};

	const delBtnClick = (i) => {
		if (confirm('delete?')) {
			listPost.splice(i, 1);
			listPost = listPost;
		}
	};

	const onInputPostChange = (inputName, i, val) => {
		let newPost = {
			...listPost[i],
			[inputName]: val
		};
		listPost[i] = newPost;
	};

	$: {
		//console.log(listPost);
		listPost.forEach((post) => {
			const { path, title } = post;
			post['fullPath'] = (path ? `${path}/` : '') + slugify(title);
		});
	}
</script>

<div class="buttons">
	<div class="add-btn" on:click={addBtnClick}>add post</div>
	<div class="save-btn" on:click={saveBtnClick}>save</div>
</div>

<div class="posts">
	{#each listPost as { id, fullPath, path, cover, background, title, date, priority, isFolder, toPage, isHidden, data }, i (id)}
		<div class="one-post">
			<div class="cover">
				<div class="cover-img-wrap">
					<img src={`${constants.picolaDomainImg}${cover}?w=300&h=300`} alt={cover} />
				</div>
				<div class="del-edit">
					<div class="del-btn" on:click={() => delBtnClick(i)}>delete</div>
					<a class="edit-btn" href={`/admin/post/${id}`}>edit</a>
				</div>
			</div>
			<div class="details">
				<div class="one-detail">
					<div class="detail-name">ID</div>
					{id}
				</div>
				<div class="one-detail">
					<div class="detail-name">full path</div>
					{fullPath}
				</div>
				<div class="one-detail">
					<div class="detail-name">path</div>
					<input type="text" bind:value={path} />
				</div>
				<div class="one-detail">
					<div class="detail-name">cover</div>
					<input type="text" bind:value={cover} />
				</div>
				<div class="one-detail">
					<div class="detail-name">background</div>
					<input type="text" bind:value={background} />
				</div>
				<div class="one-detail">
					<div class="detail-name">title</div>
					<input type="text" bind:value={title} />
				</div>
				<div class="one-detail">
					<div class="detail-name">date</div>
					<input type="text" bind:value={date} />
				</div>
				<div class="one-detail">
					<div class="detail-name">priority</div>
					<input type="number" bind:value={priority} />
				</div>
				<div class="one-detail">
					<div class="detail-name">is folder</div>
					<div on:click={() => onInputPostChange('isFolder', i, !listPost[i]['isFolder'])}>
						{isFolder}
					</div>
				</div>
				<!-- <div class="one-detail">
					<div class="detail-name">folder path</div>
					<input type="text" bind:value={toPage} />
				</div> -->
				<div class="one-detail">
					<div class="detail-name">hidden</div>
					<div on:click={() => onInputPostChange('isHidden', i, !listPost[i]['isHidden'])}>
						{isHidden}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="buttons">
	<div class="add-btn" on:click={addBtnClick}>add post</div>
	<div class="save-btn" on:click={saveBtnClick}>save</div>
</div>

<style>
	.posts {
		border-top: 1px solid rgb(177, 177, 177);
		border-bottom: 1px solid rgb(177, 177, 177);
	}
	.one-post {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 20px 0;

		border-bottom: 1px solid rgb(177, 177, 177);
	}
	.one-post:last-child {
		border-bottom: none;
	}
	.one-post .cover {
		width: 310px;
		height: 310px;
		margin-right: 40px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.one-post .cover .cover-img-wrap {
		width: 270px;
		height: 270px;
	}
	.one-post .cover img {
		max-width: 270px;
		max-height: 270px;
		width: 100%;
		height: auto;
	}
	.details {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.one-detail {
		display: flex;

		height: 30px;

		color: #0e0e0e;
	}
	.detail-name {
		width: 120px;
	}
	.one-detail input {
		width: 500px;
	}
	.buttons {
		display: flex;
	}
	.add-btn {
		cursor: pointer;
		color: whitesmoke;
		margin: 20px;
		background-color: cornflowerblue;
		padding: 10px 30px;
		font-size: 22px;
		width: max-content;
	}
	.save-btn {
		cursor: pointer;
		color: whitesmoke;
		margin: 20px;
		background-color: lightgreen;
		padding: 10px 30px;
		font-size: 22px;
		width: max-content;
	}
	.del-edit {
		width: 100%;
		display: flex;
		justify-content: space-around;
	}
	.del-btn {
		cursor: pointer;
		text-align: center;
		width: 100px;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #ff4646;
		color: whitesmoke;
	}
	.edit-btn {
		cursor: pointer;
		text-align: center;
		width: 100px;
		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #50cfa5;
		color: whitesmoke;
		text-decoration: none;
	}
</style>
