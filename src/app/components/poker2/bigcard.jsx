export default function BigCard() {
  return (
    <section className="body-font max-w-7xl mx-auto">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <picture>
            <img
              className="w-[600px] h-[360px] object-cover object-center rounded"
              alt="hero"
              src="/pokerimages2/gallaryimg2.jpg"
            />
          </picture>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Elevate Your Poker Game with Natural8 India
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Discover the best online poker experience with Natural8 India. We
            offer a wide range of exciting games, exclusive app features, and
            game-enhancing tools to help you take your poker skills to the next
            level. Whether you are a seasoned player or just starting out, our
            platform provides everything you need to enjoy and excel at online
            poker.
          </p>
        </div> 
      </div>
    </section>
  );
}
