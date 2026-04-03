import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Testing useDebounce</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search..."
        className="w-full border-2 border-gray-300 p-2 rounded mb-4"
      />

      <div className="space-y-2">
        <p className="text-sm">
          <span className="font-semibold">Immediate value:</span>
          <span className="ml-2 text-blue-600">{search}</span>
        </p>

        <p className="text-sm">
          <span className="font-semibold">Debounced value (500ms delay):</span>
          <span className="ml-2 text-green-600">{debouncedSearch}</span>
        </p>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        💡 Notice: The debounced value only updates after you stop typing for
        500ms
      </p>
    </div>
  );
}

export default App;
