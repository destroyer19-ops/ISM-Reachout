import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Campaign from './pages/Campaign.jsx'
import Footer from './components/Footer.jsx'
import TeevoCampaign from './pages/TeevoCampaign.jsx'
import CampaignDescr from './pages/CampaignDescr.jsx'
import LeftBehindCampaign from './pages/LeftBehindCampaign.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/campaigns',
        element: <Campaign/>,
      },
      {
        path: '/campaigns/teens-teevolution',
        element: <TeevoCampaign/>
      },
      {
        path: '/campaigns/say-yes-to-kids',
        element: <CampaignDescr/>
      },
      {
        path: '/campaigns/no-one-left-behind',
        element: <LeftBehindCampaign/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router={router}/>
    
    </>
  </StrictMode>,
)
