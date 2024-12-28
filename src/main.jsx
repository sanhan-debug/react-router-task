import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <App />
  </ProductProvider>,
)
