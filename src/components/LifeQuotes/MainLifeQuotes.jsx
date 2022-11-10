import kadvice from "kadvice";

const MainLifeQuotes = () => {
  const dailyAdvice = kadvice.daily();

  return (
    <div className="sm:relative w-full sm:h-full">
      <div className="sm:absolute sm:w-[250px] text-center sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 sm:p-0 p-5">
        <h3 className="sm:text-base text-lg">{dailyAdvice.message}</h3>
        <p className="mt-6 text-gray-400 sm:text-base text-lg">
          - {dailyAdvice.author} -
        </p>
      </div>
    </div>
  );
};

export default MainLifeQuotes;
