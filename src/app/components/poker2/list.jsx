import Link from "next/link";

export default function List() {
  return (
    <main className="sm:grid max-w-sm  grid-cols-6 sm:grid-cols-1 sm:max-w-sm  h-full mx-auto bg-black gap-8">
      <div className="grid-cols-1">
        <figure className="md:flex gap-4">
          <picture>
            <img
              className="w-24 h-24  md:rounded-none rounded-full mx-auto object-cover"
              src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              width="384"
              height="512"
            />
          </picture>

          <div className=" text-center md:text-left space-y-4">
            <figcaption className="font-medium">
              <div className="text-white font-bold">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-400">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
      <div>
        <figure className="md:flex gap-4">
          <picture>
            <img
              className="w-24 h-24  md:rounded-none rounded-full mx-auto object-cover"
              src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              width="384"
              height="512"
            />
          </picture>

          <div className=" text-center md:text-left space-y-4">
            <figcaption className="font-medium">
              <div className="text-white font-bold">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-400">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
      <div className="">
        <figure className="md:flex gap-4">
          <picture>
            <img
              className="w-24 h-24  md:rounded-none rounded-full mx-auto object-cover"
              src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxsYWR5fGVufDB8MHx8fDE2OTQxNzI4MTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
              width="384"
              height="512"
            />
          </picture>

          <div className=" text-center md:text-left space-y-4">
            <figcaption className="font-medium">
              <div className="text-white font-bold">Sarah Dayan</div>
              <div className="text-slate-700 dark:text-slate-400">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </main>

    // <main className="bg-zinc-900 max-w-sm mx-auto">
    //   <div className="sm:col-span-6 lg:col-span-4">
    //     <div className="flex items-start mb-3 pb-3">
    //       <Link href="#" className="inline-block mr-3">
    //         <div
    //           className="w-20 h-20 bg-cover bg-center"
    //           style={{
    //             backgroundImage: "url('/pokerimages2/hero.jpg')",
    //           }}
    //         ></div>
    //       </Link>
    //       <div className="text-sm">
    //         <p className="text-white text-xs">Aug 18</p>
    //         <a
    //           href="#"
    //           className="text-white font-medium hover:text-indigo-600 leading-none"
    //         >
    //           Cristiano Ronaldo of Juventus FC looks dejected during the...
    //         </a>
    //       </div>
    //     </div>
    //     <div className="flex items-start mb-3 pb-3">
    //       <Link href="#" className="inline-block mr-3">
    //         <div
    //           className="w-20 h-20 bg-cover bg-center"
    //           style={{
    //             backgroundImage: "url('/pokerimages2/hero.jpg')",
    //           }}
    //         ></div>
    //       </Link>
    //       <div className="text-sm">
    //         <p className="text-white text-xs">Aug 18</p>
    //         <a
    //           href="#"
    //           className="text-white font-medium hover:text-indigo-600 leading-none"
    //         >
    //           Cristiano Ronaldo of Juventus FC looks dejected during the...
    //         </a>
    //       </div>
    //     </div>
    //     <div className="flex items-start mb-3 pb-3">
    //       <Link href="#" className="inline-block mr-3">
    //         <div
    //           className="w-20 h-20 bg-cover bg-center"
    //           style={{
    //             backgroundImage: "url('/pokerimages2/hero.jpg')",
    //           }}
    //         ></div>
    //       </Link>
    //       <div className="text-sm">
    //         <p className="text-white text-xs">Aug 18</p>
    //         <a
    //           href="#"
    //           className="text-white font-medium hover:text-indigo-600 leading-none"
    //         >
    //           Cristiano Ronaldo of Juventus FC looks dejected during the...
    //         </a>
    //       </div>
    //     </div>
    //     <div className="flex items-start mb-3 pb-3">
    //       <Link href="#" className="inline-block mr-3">
    //         <div
    //           className="w-20 h-20 bg-cover bg-center"
    //           style={{
    //             backgroundImage: "url('/pokerimages2/hero.jpg')",
    //           }}
    //         ></div>
    //       </Link>
    //       <div className="text-sm">
    //         <p className="text-white text-xs">Aug 18</p>
    //         <a
    //           href="#"
    //           className="text-white font-medium hover:text-indigo-600 leading-none"
    //         >
    //           Cristiano Ronaldo of Juventus FC looks dejected during the...
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
