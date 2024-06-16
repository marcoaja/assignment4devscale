"use client";

import { IoTrash } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const MoneyTableData = ({ transaction, index }) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const query = searchParams.get("search")?.toString();

  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/XtCQM3leuOnj", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([transaction._id]),
    });

    router.refresh();
  }

  let type = "";
  if (transaction.type === "Income") {
    type = "text-emerald-700 font-semibold bg-emerald-200 py-2 px-4 rounded-xl";
  } else {
    type = "text-rose-700 font-semibold bg-rose-200 py-2 px-4 rounded-xl";
  }

  let hidden = "";

  if (!transaction.name.toLowerCase().includes(query) && query !== undefined) {
    hidden += "hidden";
  }

  return (
    <tr className={`bg-neutral-50 border-b ${hidden}`}>
      <td className="px-6 py-3">{index + 1}</td>
      <td className="px-6 py-3">{transaction.date.toString()}</td>
      <td className="px-6 py-3">{transaction.name}</td>
      <td className={`px-6 py-3`}>
        <span className={`${type}`}>{transaction.type}</span>
      </td>
      <td className="px-6 py-3">
        Rp{Intl.NumberFormat("de-DE").format(transaction.amount)}
      </td>
      <td className="px-6 py-3 text-center">
        <button
          onClick={handleDeleteData}
          className="hover:bg-neutral-200 p-1 rounded-md group"
        >
          <IoTrash className="text-lg text-neutral-400 group-hover:text-neutral-900" />
        </button>
      </td>
    </tr>
  );
};
