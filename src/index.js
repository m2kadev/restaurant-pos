import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
