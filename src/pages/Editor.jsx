import { useState } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    let logs = [];
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      logs.push(args.join(" "));
      originalConsoleLog(...args);
    };

    try {
      eval(code);
      setOutput(logs.join("\n"));
    } catch (error) {
      setOutput(error.toString());
    }

    console.log = originalConsoleLog; // Restore console.log
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Code Editor</h2>
      <Editor
        height="400px"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// Write your code here"
        onChange={(value) => setCode(value)}
      />
      <button onClick={runCode} style={{ marginTop: "10px" }}>Run Code</button>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default CodeEditor;
