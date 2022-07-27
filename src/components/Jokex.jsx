import React from "react";

const Jokex = () => {
  return (
    <div className=" bg-sky-900 shadow-lg shadow-sky-600 lg:w-[56rem] text-slate-200 px-12 py-24 sm:px-24 sm:py-14 rounded-3xl grid gap-3 m-4">
      <h2 className="text-2xl font-bold text-center my-4">Random Jokes Generator</h2>
      <span className="font-semibold">Joke ID: 003</span>
      <p className="font-light tracking-tight leading-loose text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias libero aperiam illum quidem explicabo sint ex
        veniam ut placeat, blanditiis distinctio rem. Aspernatur reiciendis, animi quos soluta maxime dignissimos!
      </p>
      <button
        type="button"
        className="mt-12 px-4 py-2 bg-emerald-500 text-emerald-100 justify-self-center rounded-lg hover:bg-emerald-700 cursor-pointer ">
        Generate joke
      </button>
    </div>
  );
};

export default Jokex;
