<script lang="ts" setup>
const isMobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
	<div class="root">
		<h2 v-if="isMobile">Upload video</h2>
		<h1 v-else>Streamvictus - Upload video</h1>

		<hr />
		<div>
			<p>Upload hier een video</p>
			<p>Om dit te doen, heb je een video sleutel nodig. Vraag hiervoor aan Niels</p>

			<br />

			<form>
				<label for="title">Titel</label>
				<input type="text" id="title" name="title" placeholder="Titel" required />

				<label for="description">Beschrijving</label>
				<input type="text" id="description" name="description" placeholder="Beschrijving" required />

				<label for="video_key">Video-sleutel</label>
				<input type="text" id="video_key" name="video_key" placeholder="Video-sleutel" required />

				<label for="thumbnail">Thumbnail</label>
				<input type="file" id="thumbnail" name="thumbnail" placeholder="Thumbnail" required />

				<label for="video">Video (mp4)</label>
				<input type="file" id="video" name="video" placeholder="Video" required />

				<input class="btn" type="submit" value="Submit" />
			</form>
		</div>
	</div>
</template>

<style lang="sass" scoped>
.root
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  height: 100%

hr
  width: 100%

form
  display: grid
  grid-template-columns: 100px 1fr

  gap: 0.75rem

  .btn
    margin-top: 1rem
</style>
