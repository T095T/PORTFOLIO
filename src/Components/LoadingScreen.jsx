export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-2xl font-mono font-bold">
        `Loading...` <span className="animate-blink ml-1"> </span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-yellow-500 shadow-[0_0_15px_yellow] rounded animate-l"></div>
      </div>
    </div>
  );
};
