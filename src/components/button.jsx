"use client";

import { AddTransaction } from "@/components/add-transaction";
import { IoAddSharp } from "react-icons/io5";
import { useState } from "react";

export const Button = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="inline-flex items-start text-neutral-900 bg-indigo-200 hover:bg-indigo-700 hover:text-neutral-50 hover:shadow-lg px-4 py-2 rounded-lg text-sm transition-all duration-300"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <IoAddSharp size={20} className="me-3" aria-hidden="true" />
        Add Transaction
      </button>
      <AddTransaction
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};
