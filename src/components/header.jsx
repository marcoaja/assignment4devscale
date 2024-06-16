import { TbPigMoney } from "react-icons/tb";
export const Header = () => {
  return (
    <div className="w-full p-4 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <TbPigMoney className="text-xl text-indigo-800" />
        <h1 className="text-xl font-bold">Simple Money Manager</h1>
      </div>

      <div className="flex justify-center items-center gap-x-2">
        <h3>User</h3>
        <div className="bg-indigo-700 text-sm text-neutral-50 size-8 rounded-full flex justify-center items-center font-bold">
          U
        </div>
      </div>
    </div>
  );
};
