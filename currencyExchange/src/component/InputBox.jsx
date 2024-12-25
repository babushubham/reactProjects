import React , {useId} from 'react'

function InputBox({
    label,
    onAmountChange,
    onCurrencyChange,
    amount,
    currencyOption = [],
    selectCurrency="inr",
    currDisabled =false,
    amtDisabled =false,

    className =""
}) {
    const amountInputId = useId()

  return (
    <div className={`bg-white p-6 rounded-lg text-sm flex gap-4 mb-5 mt-5 py-7`}>
        <div className='w-1/2 '>
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block text-lg "> 
            {label}
            </label>

            <input 
            id={amountInputId}
            className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none  w-full bg-transparent py-2 text-2xl overflow-hidden'
            type="number"
            placeholder='Amount'
            disabled ={ amtDisabled}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />

        </div>
        <div >
            <p className='mb-5 text-xl'>Currency Type</p>
            <select className='rounded-lg py-2 px-4 bg-gray-100 cursor-pointer outline-none text-lg'
            value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
disabled = {currDisabled}
>

                    {currencyOption.map((currency) =>
                     (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                    )
                    )}
                
            </select>
        </div>
    </div>
  )
}

export default InputBox;