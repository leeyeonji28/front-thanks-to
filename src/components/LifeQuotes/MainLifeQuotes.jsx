import kadvice from "kadvice";

const MainLifeQuotes = () => {
  const dailyAdvice = kadvice.daily();

  return (
    <div className="lg:relative w-full lg:h-full">
      <div className="lg:absolute lg:w-[250px] text-center lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 lg:p-0 p-5">
        <h3 className="lg:text-base text-lg">{dailyAdvice.message}</h3>
        <p className="mt-6 text-gray-400 text-base">- {dailyAdvice.author} -</p>
      </div>
    </div>
  );
};

export default MainLifeQuotes;
