interface CardProps {
  imageSrc: string
  name: string
  description: string
}

export default function Card({ imageSrc, name, description }: CardProps) {
  return (
    <div className="flex flex-col items-start gap-4 min-w-82 min-h-62 text-4 shadow-xl py-9 pl-10">
      <img className="max-w-18 max-h-18" src={imageSrc} alt={name} />
      <h3 className="font-bold">{name}</h3>
      <span className="max-w-12 max-h-[2px] bg-[FF685B]"></span>
      <p className="text-[14px] font-normal">{description}</p>
    </div>
  )
}