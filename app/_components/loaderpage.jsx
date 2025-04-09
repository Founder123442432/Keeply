export default function LoaderPage() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="relative">
        <div className="relative w-20 h-20">
          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#0ff] border-b-[#0ff] animate-spin"></div>

          <div className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"></div>
      </div>
    </div>
  );
}
