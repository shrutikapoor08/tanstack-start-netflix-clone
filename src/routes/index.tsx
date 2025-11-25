import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero'
import TrendingNow from '@/components/TrendingNow'
export const Route = createFileRoute('/')({ component: App })

function App() {
return (<main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Hero />
        <div className='container mx-auto mt-6 max-w-6xl px-6'>
          <TrendingNow />
        </div>
      </div>
    </main>)
}
