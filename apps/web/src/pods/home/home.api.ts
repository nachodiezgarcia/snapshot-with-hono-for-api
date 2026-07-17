import { createServerFn } from '@tanstack/react-start';
import type { HomeSection } from './home.model';
import { mapHomeSectiontoVm } from "./home.mapper";

export const getHomePageContent = createServerFn({ method: 'GET' }).handler(async () => {
  const apiUrl = process.env.PUBLIC_API_BASE_URL ?? 'http://localhost:3001';
  console.log('[getHomePageContent] fetching', `${apiUrl}/api/home`);
  const response = await fetch(`${apiUrl}/api/home`);
  console.log('[getHomePageContent] response status', response.status);
  const content: HomeSection = await response.json();
  return mapHomeSectiontoVm(content);
});