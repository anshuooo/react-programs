import { useState } from "react";

export default function Spreadsheet() {
  const rows = 3;
  const cols = 3;

  // State for grid data
  const [grid, setGrid] = useState(
    Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(""))
  );

  // History for Undo/Redo
  const [history, setHistory] = useState([grid]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Function to update cell data
  const handleChange = (row, col, value) => {
    const newGrid = grid.map((r, rIndex) =>
      r.map((cell, cIndex) => (rIndex === row && cIndex === col ? value : cell))
    );

    // Update state and history
    const newHistory = history.slice(0, historyIndex + 1);
    setGrid(newGrid);
    setHistory([...newHistory, newGrid]);
    setHistoryIndex(newHistory.length);
  };

  // Undo function
  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setGrid(history[historyIndex - 1]);
    }
  };

  // Redo function
  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setGrid(history[historyIndex + 1]);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Spreadsheet with Undo/Redo</h2>

      {/* Undo / Redo Buttons */}
      <div className="mb-4">
        <button
          onClick={handleUndo}
          disabled={historyIndex === 0}
          className="px-3 py-1 bg-blue-500 text-white rounded mr-2 disabled:opacity-50"
        >
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={historyIndex === history.length - 1}
          className="px-3 py-1 bg-green-500 text-white rounded disabled:opacity-50"
        >
          Redo
        </button>
      </div>

      {/* Grid / Spreadsheet */}
      <div className="grid grid-cols-3 gap-2">
        {grid.map((row, rIndex) =>
          row.map((cell, cIndex) => (
            <input
              key={`${rIndex}-${cIndex}`}
              type="text"
              value={cell}
              onChange={(e) => handleChange(rIndex, cIndex, e.target.value)}
              className="w-20 h-10 border p-2 text-center"
            />
          ))
        )}
      </div>
    </div>
  );
}
