import NextIcon from "../assets/icon/NextIcon";
import PrewIcon from "../assets/icon/PrewIcon";

function Paggination() {
  return (
    <div>
      <ul className="flex justify-center items-center px-[20px] gap-[20px] mt-[20px] tablemin845:gap-[10px]">
        <li className="py-[20px] px-[20px] border-transparent bg-blue-500 hover:bg-blue-600  rounded-xl cursor-pointer tablemin845:px-[12px] tablemin845:py-[12px]">
          <span className="fill-white">
            <PrewIcon />
          </span>
        </li>
        <li className="py-[20px] px-[25px] border-transparent bg-white  hover:bg-blue-600  rounded-xl   cursor-pointer tablemin845:px-[18px] tablemin845:py-[12px]">
          <span className="text-blue-500 hover:text-white">1</span>
        </li>
        <li className="py-[20px] px-[25px] border-transparent bg-white  hover:bg-blue-600  rounded-xl cursor-pointer tablemin845:px-[18px] tablemin845:py-[12px]">
          <span className="text-blue-500 hover:text-white">2</span>
        </li>
        <li className="py-[20px] px-[25px] border-transparent bg-white  hover:bg-blue-600  rounded-xl cursor-pointer tablemin845:px-[18px] tablemin845:py-[12px] mobil640:hidden">
          <span className="text-blue-500 hover:text-white">3</span>
        </li>
        <li className="py-[20px] px-[25px] border-transparent bg-white  hover:bg-blue-600  rounded-xl cursor-pointer tablemin845:px-[18px] tablemin845:py-[12px] mobil640:hidden">
          <span className="text-blue-500 hover:text-white">4</span>
        </li>
        <li className="py-[20px] px-[25px] border-transparent bg-white  hover:bg-blue-600  rounded-xl cursor-pointer tablemin845:px-[18px] tablemin845:py-[12px]">
          <span className="text-blue-500 hover:text-white">...</span>
        </li>
        <li className="py-[20px] px-[20px] border-transparent cursor-pointer  bg-blue-500 hover:bg-blue-600  rounded-xl tablemin845:px-[12px] tablemin845:py-[12px]">
          <span className="fill-white ">
            <NextIcon />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Paggination;
