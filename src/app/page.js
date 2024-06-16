import { Search } from "@/components/search";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { MoneyTable } from "@/components/money-table";
import { MoneyTotal } from "@/components/money-total";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/XtCQM3leuOnj", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <main className="max-w-screen-sm lg:max-w-screen-lg mx-auto mt-5 mb-40">
      <Header />
      <div className="flex justify-between items-center gap-1 mb-5">
        <Search />
        <Button />
      </div>
      <MoneyTotal transactions={data} />
      <MoneyTable transactions={data} />
    </main>
  );
}
