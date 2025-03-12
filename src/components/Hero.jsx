import { TextAnimate } from "./magicui/text-animate";

export default function Hero() {
  return (
    <div className="flex w-full items-center justify-center h-50 md:h-130 bg-[url(/hero.png)] bg-cover bg-no-repeat bg-center ">
      <div className="flex-col gap-10">
        <TextAnimate
          as="h1"
          animation="blurInUp"
          duration={1}
          className=" text-stone-50 text-base md:text-5xl text-center "
        >
          Transformă-ți corpul. Depășește-ți limitele.
        </TextAnimate>
        <TextAnimate
          as="h2"
          animation="blurInUp"
          duration={1}
          className="  text-stone-50 text-sm text-balance md:text-3xl text-center"
        >
          Echipamente moderne • Antrenori dedicați • Abonamente flexibile
        </TextAnimate>
      </div>
    </div>
  );
}
