import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')!).render(
 <Provider store={store} >
    <BrowserRouter>
  <AppRoutes/>
  </BrowserRouter>
 </Provider>
)
