import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log(body);
});