import React from "react";
import { Search } from "lucide-react";

function Searchbar({search,setSearch}) {
  return (
    <div className="bg-black flex justify-center items-center gap-4 py-8">

      {/* Search Input */}
      <div className="relative w-96">

        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text" value={search} onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search Developer..."
          className="w-full h-11 pl-10 pr-4 rounded-xl border border-zinc-600 bg-zinc-900 text-white placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
        />

      </div>

      {/* Search Button */}
      <button className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
        Search
      </button>

    </div>
  );
}

export default Searchbar;