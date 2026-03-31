import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(

    <GoogleOAuthProvider clientId="347256781647-n12rvq41rtc7eqk1lr8hq77u03vi1niu.apps.googleusercontent.com">
      <RouterProvider router={Router} />
    </GoogleOAuthProvider>

)