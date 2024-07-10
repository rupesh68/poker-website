export default function ImgWithContent() {
  return (
    <div className="flex py-10 max-w-3xl gap-4 mx-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-900">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <picture>
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </picture>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-900">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <picture>
            <img
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full transition duration-300 ease-in-out hover:scale-110"
              alt="Louvre"
            />
          </picture>
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
}
