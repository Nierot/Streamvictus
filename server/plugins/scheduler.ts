import { useScheduler } from "#scheduler"
import { readMovies } from '../util/read-movies';

export default defineNitroPlugin(() => {
  startScheduler()
})

function startScheduler() {
  const scheduler = useScheduler();

  // scheduler.run(readMovies).everySecond();
  scheduler.run(readMovies).everyFifteenMinutes();
}