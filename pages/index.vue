<script setup>
const DEFAULT_THUMBNAIL = 'https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg'

const selectedFilter = ref(0)

const {data, error, refresh} = await useAsyncData('videos', () =>
	$fetch('/api/videos', {
		params: {
			tag: selectedFilter.value,
		},
		watch: [selectedFilter.value],
	}),
)

const setFilter = (id) => {
	selectedFilter.value = id
	refresh()
}
</script>

<template>
	<div class="index">
		<h1>Streamvictus</h1>
		<h2>Hier een video uploaden? Stuur een mailtje naar niels@oddinvictus.nl</h2>

		<hr />

		<div v-if="error">Error: {{ error }}</div>

		<div v-else class="main">
			<nav>
				<h2>Filters</h2>
				<button v-if="selectedFilter != 0" @click="setFilter(0)">Wis filters</button>

				<button
					v-for="tag in data.tags"
					:key="tag.id"
					:id="`tag-${tag.id}`"
					:data-selected="selectedFilter == tag.id"
					@click="setFilter(tag.id)"
				>
					{{ tag.name }}
				</button>
			</nav>

			<div class="videos">
				<Video
					v-for="video in data.videos"
					:key="video.id"
					:id="video.id"
					:title="video.title"
					:thumbnail="`/api/static/${video.thumbnail}` || DEFAULT_THUMBNAIL"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="sass" scoped>
h1
	font-size: 3rem
	font-weight: 600

h2
	font-size: 1.2rem

button
	all: unset
	display: block
	cursor: pointer

	&[data-selected="true"]
		&::before
			content: '✓'
			margin-right: 0.5rem

	&:hover
		text-decoration: underline

.main
	display: grid
	grid-template-columns: 200px 1fr

.videos
	display: grid
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
	grid-gap: 1rem
</style>
