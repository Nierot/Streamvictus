<script setup>
const props = defineProps({
	id: Number,
	title: String,
	description: String,
	thumbnail: String,
})

function play(id) {
	const slug = props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
	navigateTo(`/video/${id}/${slug}`)
}
</script>

<template>
	<div class="video" v-on:click="play(id)">
		<div class="overlay">⏵</div>

		<div class="inner">
			<img :src="thumbnail" />
		</div>

		<div class="video-info">
			<h3>{{ title }}</h3>
			<p>{{ description }}</p>
		</div>
	</div>
</template>

<style scoped>
.video {
	position: relative;
}

img {
	aspect-ratio: 16/9;
	width: 100%;
	object-fit: cover;
}

.inner {
	opacity: 1;
	display: block;
	width: 100%;
	height: auto;
	transition: 0.5s ease;
	backface-visibility: hidden;
}

.video:hover .overlay {
	opacity: 1;
	font-size: 3rem;
}

.video:hover .inner {
	opacity: 0.5;
}

.overlay {
	transition: 0.5s ease;
	opacity: 0;
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	-ms-transform: translate(-50%, -50%);
	text-align: center;
}

.video:hover {
	cursor: pointer;

	.overlay {
		display: block;
	}
}
</style>
