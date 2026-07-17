import { createFileRoute } from '@tanstack/react-router'
//import { Home, getHomePageContent } from '@/pods/home/home.index';


export const Route = createFileRoute('/')({
  loader: async() =>  {
    const content = 'Mensaje';//await getHomePageContent(); Y en el return( <Home content={content} />)
    return { content };
  },
  component: HomePage
})

function HomePage() {
  const { content } = Route.useLoaderData();
  return <h1>{content}</h1>
}
