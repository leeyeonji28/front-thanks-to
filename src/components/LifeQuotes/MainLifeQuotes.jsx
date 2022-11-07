import kadvice from "kadvice";

const MainLifeQuotes = () => {
  const dailyAdvice = kadvice.daily();

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-[250px] text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h3>{dailyAdvice.message}</h3>
        <p className="mt-6 text-gray-400">- {dailyAdvice.author} -</p>
      </div>
    </div>
  );
};

export default MainLifeQuotes;
