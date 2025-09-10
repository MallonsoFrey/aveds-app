import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WelcomePage from "../components/WelcomePage"
import ContactsPage from "../components/ContactsPage"
import Header from "../components/Header"
import HomePage from "../components/HomePage"
import AuthModal from '../components/AuthModal/AuthModal.js'
import { AuthProvider } from "./context/AuthContext.js" 

function App() {
  const [isOpen, setIsOpen] = useState(false) 

  return <>
  <AuthProvider>
    <BrowserRouter>
      <Header onLoginClick={() => setIsOpen(true)}/>
        <main className="flex justify-center md:mt-44 mt-33 text-center min-h-[100vh] min-w-[320px] max-w-[1280px] mx-auto">
          <Routes>
            <Route path="/" element={<HomePage onLoginClick={() => setIsOpen(true)} />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </main>
      <AuthModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </BrowserRouter>
  </AuthProvider>
  </>
}

export default App