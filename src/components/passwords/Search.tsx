import React, { useEffect, useState, useContext } from "react";
import { Context, IContext } from "@/components/Context";

type Props = {};

function Search({}: Props) {
  const [input, setInput] = useState<string>("");

  const { setSearch } = useContext(Context) as IContext;

  useEffect(() => {
    let timer = setTimeout(() => setSearch(input), 100);

    return () => {
      clearTimeout(timer);
    };
  }, [input, setSearch]);

  return (
    <div className="relative">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
      />
      {input !== "" && (
        <button
          onClick={(e) => setInput("")}
          className="absolute left-0 bottom-6 text-red-400 text-xs"
        >
          clear
        </button>
      )}
    </div>
  );
}

export default Search;
