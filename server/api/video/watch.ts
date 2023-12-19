import { useRequestHeaders } from 'nuxt/app';
import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const headers = getRequestHeaders(event);

  console.log({ headers })

  const id = query.id;

  if (!id) {
    return {
      statusCode: 400,
      body: 'Bad request'
    };
  }

  const video = await prisma.video.findFirst({
    where: {
      id: Number(id)
    }
  });

  if (!video) {
    return {
      statusCode: 404,
      body: 'Video not found'
    };
  }
});