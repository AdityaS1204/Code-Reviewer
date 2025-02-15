import { useEffect, useState } from 'react'
import 'prismjs/themes/prism-tomorrow.css';
// import "prismjs/themes/prism.css";
import prism from 'prismjs'
import Editor from 'react-simple-code-editor'
import './App.css'

function App() {
  const [code, setcode] = useState('')
  useEffect(() => {
    prism.highlightAll()
  }, [])


  return (
    <div className='p-5 h-screen w-full bg-neutral-950 flex gap-3 flex-col md:flex-row lg:flex-row'>
      <div className="left relative  bg-neutral-700 h-96 w-full rounded-lg">
        {/* code div */}
        <div className="p-2 h-full">

          <Editor
            value={code}
            onValueChange={code => setcode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: "14",
              // color:"white",
              // backgroundColor: "#282c34", // Dark background
              // color: "#ffffff", // Ensure text is visible (white)
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <button className='py-2 px-5 bg-amber-200 rounded-xl absolute bottom-3 right-3 hover:bg-amber-100 transition duration-200 cursor-pointer'>Submit</button>
      </div>
      <div className="right bg-amber-950 h-96 w-full rounded-lg"></div>
    </div>
  )
}

export default App
