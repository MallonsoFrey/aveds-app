import { Link } from "react-router-dom" 
import { useAuth } from "../src/context/AuthContext" 

export default function WelcomePage() {
  const { user, logout } = useAuth() 

  return (
    <div className="flex flex-col w-full gap-9 md:mt-12">
      {!user ? (
        <p className="text-center">Вы не авторизованы</p>
      ) : (
        <>
          <h1 className="text-3xl text-left md:text-6xl text-[#252B42] font-bold">
            Привет, {user.name}!
          </h1>
          <div className="flex gap-3">
            <button
              onClick={logout}
              className="text-[14px] w-57 px-10 py-4 rounded-md bg-[#FF685B] text-white"
            >
              Выйти из аккаунта
            </button>
            <Link
              to="/contacts"
              className="text-[14px] w-60 px-10 py-4 border-1 rounded-md border-[#FF685B] text-[#FF685B]"
            >
              Перейти в контакты
            </Link>
          </div>
        </>
      )}
    </div>
  ) 
}
