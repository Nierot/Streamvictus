import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  return prisma.video.findFirst({
    where: {
      id: Number(id)
    }
  });
});