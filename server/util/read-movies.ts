import { readdir } from 'fs/promises'
import { prisma } from '~/prisma/db'

const runtimeConfig = useRuntimeConfig()

export async function readMovies() {
  console.log('Scanning for new movies...')

  const movieDirectory = runtimeConfig.movieDirectory

  // Read all folders from movieDirectory
  const dirs = await readdir(movieDirectory)

  for (const movie of dirs) {
    const dir = `${movieDirectory}/${movie}`
    // Read folder contents
    const contents = await readdir(dir)

    // Check if the folder contains a .m3u8 file
    const m3u8 = contents.find((file) => file.endsWith('.m3u8'))

    const file = movie + '/' + m3u8

    // Now create in the database, if it doesn't exist
    if (m3u8) {
      // We got a movie
      await prisma.video.upsert({
        where: {
          path: file
        },
        create: {
          title: 'Onbekende video',
          views: 0,
          thumbnail: '',
          duration: 0,
          path: file
        },
        update: {},

      })
    }

  }
}