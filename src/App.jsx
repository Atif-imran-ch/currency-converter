import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { FaExchangeAlt } from "react-icons/fa";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  // Clear converted amount when input is cleared
  useEffect(() => {
    if (!amount) {
      setConvertedAmount("");
    }
  }, [amount]);

  useEffect(() => {
    if (Object.keys(CurrencyInfo).length > 0) {
      setIsLoading(false);
    }
  }, [CurrencyInfo]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!amount || isNaN(amount)) return;
    const rate = CurrencyInfo[to];
    if (rate) {
      setConvertedAmount((amount * rate).toFixed(2));
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
        <div className="bg-white/90 p-6 rounded-lg shadow-xl">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-center font-medium">Loading currencies...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center p-3 sm:p-4 bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('/currency-converter-bg-image.jpg')`,
      }}
    >
      <div className="w-full max-w-md">
        {/* Transparent main card with glass morphism effect */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20">
          <div className="p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold text-center text-white mb-4 sm:mb-6 drop-shadow-md">
              Currency Converter
            </h1>

            <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
              <div className="space-y-4">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={setFrom}
                  onAmountChange={setAmount}
                  selectCurrency={from}
                />


                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={swap}
                    className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 text-white rounded-full cursor-pointer rotate-90 shadow-md transition-all duration-300 -my-2 sm:-my-3 z-10 relative border border-white/30 hover:rotate-270"
                    aria-label="Swap currencies"
                  >
                    <FaExchangeAlt className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-500" />
                  </button>
                </div>

                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={setTo}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              <button
                type="submit"
                disabled={!amount}
                className={`w-full mt-4 sm:mt-6 py-2 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base transition-colors cursor-pointer ${amount
                  ? "bg-white/20 hover:bg-white/30 text-white shadow-md border border-white/30"
                  : "bg-white/10 text-white/50 cursor-not-allowed"
                  }`}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>

            {convertedAmount && (
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-white/10 rounded-lg text-center border border-white/20">
                <p className="text-xs sm:text-sm text-white/80">Current Rate</p>
                <p className="font-semibold text-white text-sm sm:text-base">
                  1 {from.toUpperCase()} = {CurrencyInfo[to]?.toFixed(6)} {to.toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;