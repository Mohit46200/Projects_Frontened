import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'
import { RouterProvider } from 'react-router-dom'
import Globalprovider from '/home/mohit/Desktop/Coding/Projects/Project1/src/GlobalContext/globalcontext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(


   <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
      <Globalprovider>
            <RouterProvider router= {Router} />
      </Globalprovider>
   </GoogleOAuthProvider>
    

)