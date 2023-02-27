import { useState } from 'react'
import BTCExplorer from './BTCExplorer'
// setup react-query
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BTCExplorer />
      </QueryClientProvider>
    </div>
  )
}

export default App
