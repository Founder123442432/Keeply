export default function Logo() {
  return (
    <div className="flex items-center space-x-3" draggable>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-12 h-12"
        >
          <path
            d="M25 20 
         L75 20 
         L75 80 
         L50 65 
         L25 80 
         Z"
            fill="#3B82F6"
            className="transition-all duration-300 ease-in-out hover:fill-blue-700"
          />
        </svg>
      </div>
      <span className="text-2xl font-bold text-blue-300">Keeply</span>
    </div>
  );
}
