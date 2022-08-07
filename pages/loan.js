import React from "react";
import {
  FaAffiliatetheme,
  FaAngleLeft,
  FaDollarSign,
  FaWallet,
  FaMoneyCheck,
  FaSave,
  FaPiggyBank
} from "react-icons/fa";

function loan() {
  return (
    <div className="mt-10 justify-center items-center flex flex-col ">
      <p className="text-3xl py-4 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-600  to-pink-600">
        DashBoard
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-5 ">
        <div className="hover:scale-105 shadow-md duration-300 p-7 items-center text-center justify-center flex flex-col">
          <p className="text-blue text-gray-700">Wallet</p>
          <FaWallet className="text-blue-500 text-4xl my-4 cursor-pointer" />
          <p className="text-2xl font-bold">Ksh <span>0</span></p>
          <div className="    p-3 rounded-sm cursor-pointer">
            <p className="">Withdraw</p>
          </div>
        </div>
        <div className="hover:scale-105 shadow-md duration-300 p-7 items-center text-center justify-center flex flex-col">
          <p className="text-gray-700">Apply</p>
          <FaMoneyCheck className="text-blue-500 text-4xl my-4 cursor-pointer" />
          <div className=" p-3 rounded-sm cursor-pointer">
            <p className="">Apply</p>
          </div>
        </div>
        <div className="hover:scale-105 shadow-md duration-300 p-7 items-center text-center justify-center flex flex-col">
          <p className="text-gray-700">Loan</p>
          <FaSave className="text-blue-500 text-4xl my-4 cursor-pointer" />
          <p className="text-2xl font-bold">Ksh <span>0</span></p>
          <div className="  p-3 rounded-sm cursor-pointer">
            <p className="">Make Repayment</p>
          </div>
        </div>
        <div className="hover:scale-105 shadow-md duration-300 p-7 items-center text-center justify-center flex flex-col">
          <p className="text-gray-700">Savings</p>
          <FaPiggyBank className="text-blue-500 text-4xl my-4 cursor-pointer" />
          <p className="text-2xl font-bold">Ksh <span>0</span></p>
          <div className="  p-3 rounded-sm cursor-pointer">
            <p className="">Add Funds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loan;
