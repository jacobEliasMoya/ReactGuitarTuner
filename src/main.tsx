import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import {  store } from './store/store.ts'
import { BrowserRouter } from 'react-router'
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistor } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
          {/* <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
