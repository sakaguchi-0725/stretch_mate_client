import { TbStretching } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

const aboutItems = [
  {
    Icon: TbStretching,
    title: "あなたの目的に合わせたメニュー",
    desc: "全身ストレッチや骨盤矯正など、目的に合わせた豊富なストレッチメニューを提供しています。あなたの体の悩みや改善したいポイントにフォーカスし、最適なストレッチルーティンを見つけることができます。",
  },
  {
    Icon: FiSettings,
    title: "自分だけのメニューをカスタマイズ",
    desc: "複数のメニューを組み合わせ、自分だけのパーソナライズされたストレッチプランを作成。自分のペースで、自分に合ったルーティンを設計しましょう。",
  },
  {
    Icon: AiOutlineClockCircle,
    title: "毎日の継続をサポート",
    desc: "Stretch Mateはあなたのストレッチ習慣を応援します。日々の進捗を追跡し、継続のモチベーションを支える機能を提供。毎日の積み重ねで、体の変化を実感してください。",
  },
];

const About = () => {
  return (
    <section className="p-6 mt-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Stretch Mateでできること
        </h2>
        <div className="flex justify-between mt-16 items-center">
          <div className="p-2">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              最高のストレッチ体験を提供。
            </h3>
            <p className="text-base text-slate-500">
              あなたの毎日をもっと豊かにするために、Stretch
              Mateが提供する多彩な機能をぜひ体験してください。
              <br />
              Stretch
              Mateでは、一人ひとりのニーズに合わせた柔軟なソリューションをご用意しています。
              <br />
              目的別の厳選メニューから、完全にカスタマイズ可能なプランまで、あなたのライフスタイルや目標にぴったり合わせて、最適なストレッチ経験をお届けします。
            </p>
          </div>
          <img
            className="w-1/2 rounded-xl shadow-s p-2"
            src="../../../../public/images/about_image.jpg"
            alt="about"
          />
        </div>
        <div className="flex justify-between mt-10">
          {aboutItems.map(({ Icon, title, desc }) => (
            <div className="w-1/4" key={title}>
              <Icon size="3.5rem" style={{ color: "#6bb39a" }} />
              <h4 className="mt-2 text-base font-semibold text-slate-800">
                {title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
