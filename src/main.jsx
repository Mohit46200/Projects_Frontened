import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { RouterProvider } from 'react-router-dom'
import Globalprovider from "./GlobalContext/globalcontext.jsx"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ToastProvider } from './Components/Toast/ToastContext.jsx'


createRoot(document.getElementById('root')).render(

   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ToastProvider>
        <Globalprovider>
              <RouterProvider router= {Router} />
        </Globalprovider>
      </ToastProvider>
   </GoogleOAuthProvider>

)
