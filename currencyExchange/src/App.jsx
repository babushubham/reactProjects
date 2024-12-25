import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './component/InputBox'

function App() {

  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("inr")
  const [to, setto] = useState("usd")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)

  const swap = ()=>{
    setfrom(to)
    setto(from)
    setconvertedAmount(amount)
    setamount(convertedAmount)
  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/443399/pexels-photo-443399.jpeg')`
      }}
    >

      <div
        className='w-full max-w-xl
         mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >

          <div className='w-full mb-1'>
            <InputBox
              label='from'
              amount={amount}
              currencyOption={option}
              onAmountChange={(amount)=> setamount(amount)
              }
              selectCurrency ={from}
            />
          </div>


          <div className='relative w-full h-0.5'>
            <button
              type='button'
              className='absolute left-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-white rounded-full bg-blue-600 text-white text-2xl
              px-8 py-5'
              onClick={swap}>
              Swap
            </button>
          </div>
          <div className='w-full mt-1 mb-5'>
            <InputBox
              label='to'
              amount={convertedAmount}
              currencyOption={option}
              onCurrencyChange={(currency)=>setto(currency)
              }
              selectCurrency ={to}
              amtDisabled
            />


          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>

    </div>
  )
}

export default App