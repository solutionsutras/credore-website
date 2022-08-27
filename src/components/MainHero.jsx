import React from 'react';

const MainHero = () => {
  return (
    <main className="p-28 bg-[#29564B]">
      <div className="flex gap-10 my-10 items-center justify-center">
        <div className="flex-1">
          <h3 className="text-3xl font-extrabold text-white">
            Blockchain Powered Paperless Trade Finance Infrastructure With Privacy
          </h3>
          <p className="text-2xl text-gray-200 mt-6">
           Confidence in a set of independent and trusted contractual rules
          </p>
          <p className="text-2xl text-gray-200 mt-6">
           Digital and Blockchain Technology are Intertwining Trade and Creating interoperability
          </p>
        </div>
        <div className="flex-1">
          <img src="/assets/images/trade_zkcredore.svg" alt="" className="w-full" />
        </div>
      </div>
    </main>
  );
};

export default MainHero;
