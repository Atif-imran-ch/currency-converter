import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId();

    return (
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-sm">
            <label htmlFor={amountInputId} className="block text-sm font-medium text-white/80 mb-1">
                {label}
            </label>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                    id={amountInputId}
                    className="flex-1 p-2 text-right text-lg bg-transparent border-none outline-none text-white placeholder-white/50"
                    type="number"
                    placeholder="0.00"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    min="0"
                    step="0.01"
                />
                <select
                    className="w-full sm:w-24 md:w-auto sm:ml-2 p-2 bg-white/20 rounded-md border border-white/20 outline-none cursor-pointer text-white text-sm sm:text-base"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency} className="bg-gray-700 text-white">
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;