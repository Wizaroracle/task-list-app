import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";

function App() {
  // Test useLocalStorage
  const [name, setName] = useLocalStorage("userName", "Guest");

  // Test useDebounce
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  // Test useToggle
  const { value: isOpen, toggle, setTrue: open, setFalse: close } = useToggle();

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Custom Hooks Testing</h1>

      {/* useLocalStorage Test */}
      <div className="border-2 border-blue-300 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">1. useLocalStorage</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full border-2 border-gray-300 p-2 rounded"
        />
        <p className="mt-2 text-sm text-gray-600">
          Hello, <span className="font-semibold text-blue-600">{name}</span>!
          (Persists on refresh)
        </p>
      </div>

      {/* useDebounce Test */}
      <div className="border-2 border-green-300 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">2. useDebounce</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search..."
          className="w-full border-2 border-gray-300 p-2 rounded"
        />
        <div className="mt-2 space-y-1 text-sm">
          <p>
            Immediate: <span className="text-blue-600">{search}</span>
          </p>
          <p>
            Debounced (500ms):
            <span className="text-green-600 font-semibold">
              {" "}
              {debouncedSearch}
            </span>
          </p>
        </div>
      </div>

      {/* useToggle Test */}
      <div className="border-2 border-purple-300 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">3. useToggle</h2>

        <div className="flex gap-2 mb-4">
          <button
            onClick={toggle}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Toggle
          </button>
          <button
            onClick={open}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Open
          </button>
          <button
            onClick={close}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>

        <div className="p-4 bg-gray-100 rounded">
          <p className="font-semibold">
            Status:
            <span className={isOpen ? "text-green-600" : "text-red-600"}>
              {isOpen ? " OPEN ✓" : " CLOSED ✗"}
            </span>
          </p>

          {isOpen && (
            <div className="mt-2 p-3 bg-white border-2 border-purple-300 rounded">
              <p className="text-sm">🎉 This content only shows when open!</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2">✅ Phase 2 Complete!</h3>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• useLocalStorage - Persistent state</li>
          <li>• useDebounce - Delayed updates</li>
          <li>• useToggle - Boolean management</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
