import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

function Editor() {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");

  // Function to execute JavaScript code
  const runCode = () => {
    try {
      const result = eval(code); // Executes the code safely
      setOutput(result !== undefined ? result.toString() : "No output");
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Code Editor</h1>

      {/* Code Editor Container */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-4xl">
        <MonacoEditor
          height="400px"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(newCode) => setCode(newCode)}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
          }}
        />
      </div>

      {/* Run Code Button */}
      <button
        onClick={runCode}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
      >
        Run Code
      </button>

      {/* Output Section */}
      <div className="mt-4 bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold">Output:</h2>
        <p className="text-gray-300 whitespace-pre-line">{output}</p>
      </div>
    </div>
  );
}

export default Editor;
