import { createFileRoute } from '@tanstack/react-router'
import { Home, getHomePageContent } from '@/pods/home/home.index';


export const Route = createFileRoute('/')({
  loader: async() =>  {
    const content = await getHomePageContent();
    return { content };
  },
  component: HomePage
})

function HomePage() {
  const { content } = Route.useLoaderData();
  return (
    <Home content={content} />
  )
}
