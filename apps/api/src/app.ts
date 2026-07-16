import { Hono } from 'hono';
import { contentIslandClient } from './lib/content-island.js';
import { ENV } from './lib/env.js';

const app = new Hono();

app.get('/health', (c) => c.json({ ok: true }));

app.get('/api/snapshot-info', async (c) => {
  const info = await contentIslandClient.getSnapshotInfo();
  return c.json(info);
});

app.get('/api/contents', async (c) => {
  const contents = await contentIslandClient.getContentList();
  return c.json(contents);
});

app.on(['POST'], '/api/refresh', async (c) => {
  const secret = ENV.REFRESH_SECRET;
  const provided = c.req.header('x-refresh-secret');
  if (!secret || provided !== secret) {
    return c.json({ error: 'UNAUTHORIZED' }, 401);
  }
  return c.json(await contentIslandClient.refreshSnapshot());
});

app.get('/api/home', async (c) => {
  const content = await contentIslandClient.getContent({
    contentType: 'HomeSection',
    includeRelatedContent: 'all',
  });
  return c.json(content);
});

export default app;