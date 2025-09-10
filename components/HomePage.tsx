import { Link } from "react-router-dom" 
import Card from "./Card/Card" 
import { cardsContent } from "./Card/cardsContent" 

type HomePageProps = {
  onLoginClick: () => void
}

export default function HomePage({onLoginClick}: HomePageProps) {
  
  return (
    <div className="flex w-full flex-col gap-7 md:gap-20">
        <section className="flex flex-col w-full gap-9 md:max-h-62 md:w-[767px]">
          <h1 className="text-3xl text-left md:text-5xl text-[#252B42] font-bold">Место для получения медицинской помощи</h1>
          <div className="flex gap-3">
            <button
              onClick={onLoginClick} 
              className="w-32 text-4 px-10 py-4 rounded-md bg-[#FF685B] text-white">
                Войти
            </button>
            <Link         
              to="/contacts" 
              className="w-39 text-4 px-10 py-4 border-1 rounded-md border-[#FF685B] text-[#FF685B]">
              Контакты
            </Link>
          </div>
        </section>
        <section className="flex flex-col items-center md:flex-row md:w-full md:gap-5 md:mx-0 mx-3">
          {cardsContent.map((card) => (
          <Card key={card.id} imageSrc={card.imageSrc} name={card.name} description={card.description}/>
          ))}
        </section>
    </div>
  ) 
}