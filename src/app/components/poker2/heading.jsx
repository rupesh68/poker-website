export default function Heading({ name, title }) {
  return (
    <div class="mx-auto max-w-2xl text-center py-12 ">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-2 ">
        {name}
      </h2>
      <p class="text-lg leading-8 text-gray-600 dark:text-gray-300">{title}</p>
      <span className="h-2 inline-block px-4 w-20 bg-yellow-500"></span>
    </div>
  );
}
