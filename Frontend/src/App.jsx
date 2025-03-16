import { useEffect, useState } from 'react'
import 'prismjs/themes/prism-tomorrow.css';
import prism from 'prismjs'
import Editor from 'react-simple-code-editor'
import axios from 'axios';
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";

import './App.css'

function App() {
  const [code, setcode] = useState(``);
  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll()
  }, [])



  async function reviewCode() {

    const response = await axios.post('http://localhost:8000/ai/get-review', { code })
    setReview(response.data)

    // console.log(response.data)


  }


  return (
    <div className='p-5 h-screen w-full bg-neutral-950 flex gap-3 flex-col md:flex-row lg:flex-row'>
      <div className="left relative  bg-neutral-800 h-full w-full rounded-lg">
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
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <button
          className='py-2 px-5 bg-amber-200 rounded-xl absolute bottom-3 right-3 hover:bg-amber-100 transition duration-200 cursor-pointer'
          onClick={reviewCode}
        >Submit</button>
      </div>
      <div className="p-4 right bg-green-600 h-full w-full rounded-lg overflow-auto">
        <Markdown 
          rehypePlugins={[rehypeHighlight]}
        >
          {review}

        </Markdown>
      </div>
    </div>
  )
}

export default App
