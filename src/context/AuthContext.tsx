import { createContext, useContext, useEffect, useState } from "react" 
import rawUsers from "../data/users.json" 

type RawUser = { login: string; password: string; name: string }[];
const users = rawUsers as RawUser;

type User = {
  login: string 
  name: string 
} | null 

type AuthContextType = {
  user: User 
  login: (login: string, password: string) => boolean 
  logout: () => void 
} 

const AuthContext = createContext<AuthContextType | undefined>(undefined) 

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null) 

  useEffect(() => {
    const storedUser = localStorage.getItem("user") 
    if (storedUser) {
      setUser(JSON.parse(storedUser)) 
    }
  }, []) 

  const login = (login: string, password: string) => {
    if (password.length < 8) return false 

    const foundUser = users.find(
      (u) => u.login === login && u.password === password
    ) 

    if (foundUser) {
      const userData = { login: foundUser.login, name: foundUser.name } 
      setUser(userData) 
      localStorage.setItem("user", JSON.stringify(userData)) 
      return true 
    }
    return false 
  } 

  const logout = () => {
    setUser(null) 
    localStorage.removeItem("user") 
  } 

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  ) 
}

export function useAuth() {
  const ctx = useContext(AuthContext) 
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider") 
  return ctx 
}
