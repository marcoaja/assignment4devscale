"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { NumericFormat } from "react-number-format";

export const AddTransaction = ({ isVisible, onClose }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState();
  const router = useRouter();

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/XtCQM3leuOnj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ date, name, type, amount }]),
    });
    setDate("");
    setName("");
    setAmount("");
    router.refresh();
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      {() => {
        router.refresh();
      }}
      <div className="w-1/4 flex flex-col bg-neutral-100 px-8 pb-8 pt-4 rounded-lg">
        <button
          className="place-self-end"
          onClick={() => {
            onClose();
            setDate("");
            setName("");
            setAmount("");
          }}
        >
          <IoClose className="text-slate-400 w-5 h-5 hover:text-neutral-900 hover:bg-neutral-200 rounded-md" />
        </button>
        <div className="mb-5">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label>Transaction Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Input your transaction name"
            required
          />
        </div>
        <div className="mb-5">
          <label>Transaction Type</label>
          <select
            id="selectType"
            onChange={(e) =>
              setType(e.target.options[e.target.selectedIndex].text)
            }
          >
            <option hidden disabled selected>
              -- choose transaction type --
            </option>
            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>
        <div className="mb-5">
          <label>Amount of Money</label>

          <NumericFormat
            prefix="Rp"
            thousandSeparator
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value.substring(2).split(",").join(""))
            }
            placeholder="Rp"
            required
          />
        </div>

        <button
          className="space-x-1 text-neutral-900 bg-indigo-200 hover:bg-indigo-700 hover:text-neutral-50 hover:shadow-lg px-4 py-2 rounded-lg text-sm transition-all duration-300"
          onClick={() => {
            handleCreateData();
            onClose();
          }}
          onEnter
        >
          Add
        </button>
      </div>
    </div>
  );
};
