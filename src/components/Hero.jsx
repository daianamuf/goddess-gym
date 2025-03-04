import { TextAnimate } from "./magicui/text-animate";

export default function Hero() {
  return (
    <div className="block h-200 bg-[url(/hero.png)] bg-contain bg-no-repeat">
      <TextAnimate
        as="h1"
        animation="blurInUp"
        duration={1}
        className="absolute top-50 left-1/2 transform -translate-x-1/2   text-stone-50 text-5xl "
      >
        Transformă-ți corpul. Depășește-ți limitele.
      </TextAnimate>
      <TextAnimate
        as="h2"
        animation="blurInUp"
        duration={1}
        className="absolute top-70 left-1/2 transform -translate-x-1/2  text-stone-50 text-3xl "
      >
        Echipamente moderne • Antrenori dedicați • Abonamente flexibile
      </TextAnimate>
    </div>
  );
}
