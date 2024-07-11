export default function BigImgCard() {
  return (
    <div className="relative h-72 overflow-hidden bg-cover bg-no-repeat">
      <picture>
        <img
          src="/pokerimages2/clifford-photography-Jma2GT339Ng-unsplash.jpg"
          className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
          alt="Louvre"
        />
      </picture>
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
        Your Content Here
      </div>
    </div>
  );
}
