const Hero = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-30 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">ストレッチを新しい習慣に。<br />
          <span className="text-primary-dark">Stretch Mate </span>へようこそ！
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">あなたの毎日をもっと快適にするために、Stretch Mateはここにあります。<br />日々のストレッチがもたらす変化を実感し、自分だけのルーティンを作りましょう。</p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-5 text-lg font-semibold bg-white text-slate-900 hover:bg-stone-200">GET STARTED</button>
        </div>
      </div>
    </section>
  )
}

export default Hero