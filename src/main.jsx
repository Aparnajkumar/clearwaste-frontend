import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>  
<GoogleOAuthProvider clientId="298201492637-ea5vk32hqdi8n4cv0v3lr3hruotp6fka.apps.googleusercontent.com">
    <App />
  
</GoogleOAuthProvider> 
 </BrowserRouter>
  </StrictMode>,
)
