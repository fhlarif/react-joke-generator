import React from "react";
import Jokex from "./components/Jokex";

const App = () => {
  return (
    <div className="h-screen bg-gray-800 text-gray-300 items-center flex justify-center">
      <div className=" flex flex-col gap-5">
        <Jokex />
      </div>
    </div>
  );
};

export default App;
