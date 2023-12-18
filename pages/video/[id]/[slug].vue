<script setup lang="ts">
import type {Video} from '@prisma/client'
import {VideoPlayer} from 'vue-hls-video-player'

const route = useRoute()
const {data, pending, error} = await useFetch<Video>('/api/video/' + route.params.id)
</script>

<template>
	<h1>
		{{ data?.title || 'Laden...' }}
		• <a href="/">Terug</a>
	</h1>

	<hr />

	<div v-if="error">
		<p>Error: {{ error }}</p>
	</div>

	<div v-else-if="pending">
		<p>Laden...</p>
	</div>

	<div v-else-if="!data">
		<p>Video niet gevonden</p>
	</div>

	<div v-else class="video">
		<div class="info">
			Geupload op:
			{{
				new Date(data.createdAt).toLocaleDateString('nl-NL') +
				' ' +
				new Date(data.createdAt).toLocaleTimeString('nl-NL')
			}}
		</div>

		<br />

		<ClientOnly>
			<VideoPlayer type="default" :link="`/api/static/${data.path}`" />
		</ClientOnly>
	</div>
</template>
