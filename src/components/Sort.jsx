import SortIcon from "../assets/icon/SortIcon";


function Sort() {
    return (
        <button className="sort  flex items-center justify-between gap-[10px] bg-white rounded-2xl py-[20px] px-[40px] hover:bg-blue-400 hover:outline-blue-700 hover:fill-white outline-blue-600 mobil640:py-[10px] mobil640:px-[20px]">
              <span className="">
                <SortIcon />
              </span>
              <p className="text-[#747474] text-[14px] text-nowrap ">
                {" "}
                Сортировать по
              </p>
            </button>
    );
}

export default Sort;