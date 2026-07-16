import { type ContentSnapshot, createClient, exportSnapshot } from '@content-island/api-client';
import snapshot from '../../content-island-snapshot.json' with { type: 'json' };
import { ENV } from './env.js';

const accessToken = ENV.CONTENT_ISLAND_READ_TOKEN ?? 'snapshot-mode';

export const contentIslandClient = createClient({
  accessToken,
  mode: 'snapshot',
  // Con CONTENT_ISLAND_READ_TOKEN puesto: contenido en vivo. Sin él: snapshot del bundle.
  snapshotLoader: async () =>
    ENV.CONTENT_ISLAND_READ_TOKEN
      ? exportSnapshot({ accessToken: ENV.CONTENT_ISLAND_READ_TOKEN })
      : (snapshot as ContentSnapshot),
});