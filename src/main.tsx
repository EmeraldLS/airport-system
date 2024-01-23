import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { BookingProvider } from './context/bookingContext.tsx'
import { HotelProvider } from './context/hotelContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookingProvider>
      <HotelProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HotelProvider>
    </BookingProvider>
  </React.StrictMode>,
)
