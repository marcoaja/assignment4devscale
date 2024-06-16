import { GiMoneyStack } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";

export const MoneyTotal = ({ transactions }) => {
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((transaction) => {
    if (transaction.type == "Income") {
      totalIncome += parseInt(transaction.amount);
    } else {
      totalExpenses += parseInt(transaction.amount);
    }
  });
  return (
    <div className="flex gap-2 m-2">
      <div className="bg-emerald-200 w-full p-4 rounded-xl shadow-md">
        <h1 className="text-center text-lg text-emerald-700 font-bold">
          Total Income
        </h1>
        <div className="flex justify-center items-center gap-4">
          <GiMoneyStack className="text-5xl text-emerald-700" />
          <div className="font-bold text-emerald-700 text-xl">
            Rp{Intl.NumberFormat("de-DE").format(totalIncome)}
          </div>
        </div>
      </div>
      <div className="bg-rose-200 w-full p-4 rounded-xl shadow-lg">
        <h1 className="text-center text-lg text-rose-700 font-bold">
          Total Expenses
        </h1>
        <div className="flex justify-center items-center gap-4">
          <GiTakeMyMoney className="text-5xl text-rose-700" />
          <div className="font-bold text-rose-700 text-xl">
            Rp{Intl.NumberFormat("de-DE").format(totalExpenses)}
          </div>
        </div>
      </div>
    </div>
  );
};
