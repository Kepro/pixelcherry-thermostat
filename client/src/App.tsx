import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-white dark:bg-slate-900 h-screen">
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello world</span>
      </div>

      <div className="container mx-auto pt-10">
        <div className="bg-gradient-to-b from-teal-400 p-px relative rounded-xl sm:shadow-md sm:to-teal-400/20 to-gray-900 xl:to-gray-900">
          <div className="rounded-xl bg-gray-900 pt-16 pb-10 sm:py-12 xl:pt-16 xl:pb-8 text-white">text</div>
        </div>
      </div>
    </div>
  );
}

export default App;
