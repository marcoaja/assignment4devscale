import { MoneyTableData } from "./money-table-data";

export const MoneyTable = ({ transactions }) => {
  return (
    <table className="w-full text-sm text-left text-neutral-900">
      <thead className="text-sm bg-indigo-700 uppercase text-neutral-100">
        <tr>
          <th className="px-6 py-3">Num</th>
          <th className="px-6 py-3">Date (yy-mm-dd)</th>
          <th className="px-6 py-3">Transaction Name</th>
          <th className="px-6 py-3">Transaction Type</th>
          <th className="px-6 py-3">Amount of Money</th>
          <th className="px-6 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.reverse().map((transaction, index) => {
          return (
            <MoneyTableData
              key={transaction._id}
              transaction={transaction}
              index={index}
            />
          );
        })}
      </tbody>
    </table>
  );
};
