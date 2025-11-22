import { WelcomeView } from './views/WelcomeView'

export function App() {
  const baseFont = 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'

  return (
    <div 
      className="min-h-screen"
      style={{ fontFamily: baseFont }}
    >
      <main className="flex-1 box-border flex flex-col min-w-0">
        <WelcomeView />
      </main>
    </div>
  )
}

