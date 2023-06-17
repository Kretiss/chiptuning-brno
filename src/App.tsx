import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/scrollToTop'

import 'normalize.css'
import './assets/css/App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <Header />
        <main role="main">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
