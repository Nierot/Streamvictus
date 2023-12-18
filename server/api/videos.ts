import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const tags = await prisma.tag.findMany();

  if (query.tag && query.tag !== '0') {

    console.log({ query })

    const videoTags = await prisma.videoTag.findMany({
      where: {
        tagId: Number(query.tag),
      },
      include: {
        video: true,
      },
    });

    console.log({ videoTags })

    const videos = videoTags.map((vt) => vt.video);
    return { videos, tags };
  }


  const videos = await prisma.video.findMany();
  return { videos, tags };
});