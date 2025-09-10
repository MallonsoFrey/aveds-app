import { useState, useEffect } from "react" 
import { useNavigate } from "react-router-dom" 
import { useAuth } from "../../src/context/AuthContext" 

interface AuthModalProps {
  isOpen: boolean 
  onClose: () => void 
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { login } = useAuth() 
  const navigate = useNavigate() 

  const [form, setForm] = useState({ login: "", password: "" }) 
  const [error, setError] = useState("") 

  useEffect(() => {
    if (!isOpen) {
      setForm({ login: "", password: "" }) 
      setError("") 
    }
  }, [isOpen]) 

  if (!isOpen) return null 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() 
    if (form.password.length < 8) {
      setError("Пароль должен содержать минимум 8 символов") 
      return 
    }
    const success = login(form.login, form.password) 
    if (!success) {
      setError("Неверный логин или пароль") 
      return 
    }
    onClose() 
    navigate("/welcome")
  } 

  return (
    <div className="flex flex-col items-center gap-4">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-[#252B42] hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-4 text-center font-semibold mb-4 text-[#252B42]">
              Авторизация
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="login"
                placeholder="Логин"
                className="border rounded-md px-3 py-2"
                value={form.login}
                onChange={(e) => setForm({ ...form, login: e.target.value })}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                className="border rounded-md px-3 py-2"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              {error && <p className="text-xs text-red-500 text-center">{error}</p>}
              <button
                type="submit"
                className="px-4 py-4 bg-[#FF685B] text-white rounded-md hover:bg-[#d3382a]"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  ) 
}
