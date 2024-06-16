"use client";

import { IoSearch } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = (word) => {
    const params = new URLSearchParams(searchParams);
    if (word) {
      params.set("search", word);
    } else {
      params.delete("search");
    }
    router.replace(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        placeholder="Search by transaction name"
        className="w-full border border-slate-200 py-2 pl-10 text-sm focus:border-indigo-400 focus:ring-4 focus:ring-indigo-200 rounded-lg transition duration-200"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
      <IoSearch className="absolute left-3 top-2 h-5 w-5 text-neutral-900" />
    </div>
  );
};
