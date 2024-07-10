export default function HoverCardEffect() {
  return (
    <div className="cards flex flex-col gap-4 group">
      <div className="card bg-red-500 text-white h-24 w-64 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 transform hover:scale-110">
        <p className="text-lg font-bold">Hover Me</p>
        <p className="text-sm">Lorem Ipsum</p>
      </div>
      <div className="card bg-blue-500 text-white h-24 w-64 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 transform hover:scale-110">
        <p className="text-lg font-bold">Hover Me</p>
        <p className="text-sm">Lorem Ipsum</p>
      </div>
      <div className="card bg-green-500 text-white h-24 w-64 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 transform hover:scale-110">
        <p className="text-lg font-bold">Hover Me</p>
        <p className="text-sm">Lorem Ipsum</p>
      </div>
    </div>
  );
}
