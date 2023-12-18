import * as fs from 'fs'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const filename = getRouterParam(event, 'filename');

  if (!filename) {
    throw createError({
      statusCode: 400,
      message: 'No filename provided'
    })
  }

  const file = `${runtimeConfig.movieDirectory}/${filename}`

  console.log('Sending file', file)

  return sendStream(event, fs.createReadStream(file))
});