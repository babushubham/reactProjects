import { useState, useCallback,useEffect, useRef } from "react"




function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setpassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    
      
    let pass = ""
    let str =
      "AaBaCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    if (characterAllowed) str += "_@#*%_=!&"

    if (numberAllowed) str += "1234567890"
    console.log(str)
 
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }


    setpassword(pass)

  },


    [setLength, setnumberAllowed, setcharacterAllowed, setpassword, generate])

      const coppyToClipboard =
        useCallback(()=>{
          passRef.current?.select()
          window.navigator.clipboard.writeText(password)
        },
      [password]
      )
      

  function generate(){
    passwordGenerator()
  }
  useEffect(() => {
    passwordGenerator()
  }
, [length, numberAllowed, characterAllowed])



  return (
    <>

      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-500 ">
        <h1 className="text-white text-5xl font-serif text-center mb-6 mx-5">Password Generator</h1>

        <div className="flex mb-8">
          <input
            type="text"
            value={password}
            className="mx-4 outline-none w-full py-1 px-3 rounded-lg"
            placeholder="password"
            readOnly
            ref={passRef}
          />


          <button
          onClick={coppyToClipboard}
            className="outline-none rounded-lg bg-blue-300 text-black px-4 py-1.5 mr-5 shrink-0"
          >
            copy
          </button>

        </div>
        <div className=" text-sm  ml-9">
          <div className="flex items-center gap-x-1 mb-3">
            <input type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className="text-2xl">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">

            <input type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {

                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-2xl">Number</label>

          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              checked={characterAllowed}
              id="characterInput"
              onChange={() => {

                setcharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput"
            className="text-2xl">character</label>
          </div>
          </div>
                <div className="flex justify-center gap-x-2 my-6" >
                  <button 
                  onClick={generate}
                  className="outline-none px-6 py-2 text-black bg-green-500 rounded-full"
                  >
                    Generate
                  </button>
                </div>





        

      </div>
    </>
  )
}

export default App
