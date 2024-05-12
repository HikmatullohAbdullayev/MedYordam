import Filter from "../components/Filter";
import SortIcon from "../assets/icon/SortIcon";
import SearchIcon from "../assets/icon/SearchIcon";
import { useState } from "react";
import FilterIcon from "../assets/icon/FilterIcon";
import Quetion from "../components/Quetion";
import qustionsData from "../data/quetions.js";
import Paggination from "../components/Paggination.jsx";

function Quetions() {
  const [opeFilter, setOpenFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = qustionsData.filter((item) => {
    return item.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const burgerFilter = () => {
    setOpenFilter(!opeFilter);
    console.log(opeFilter);
  };
  return (
    <section className="mt-[81px] flex justify-start items-start gap-[20px] mb-[160px]">
      <div className="table1080:hidden">
        <Filter />
      </div>
      <div className="w-full relative">
        <div
          className={` absolute  ${
            opeFilter ? " block" : "hidden"
          }  z-10`}
        >
          <Filter burgerFilter={burgerFilter} />
        </div>
        <div className="top  py-[20px] flex justify-between items-center table1005:flex-col">
          <h3 className="title text-[50px] max-w-[700px]  font-medium px-[25px] desktop:text-[34px] table1080:text-[24px] ">
            Список последних ответов на вопросы{" "}
            <span className="text-[#747474]"> (12 493)</span>
          </h3>
          <div className="flex gap-[0px] table1005:py-[20px] table1005:px-[20px]">
            <button className="sort  flex items-center justify-between gap-[10px] bg-white rounded-2xl py-[20px] px-[40px] hover:bg-blue-400 hover:outline-blue-700 hover:fill-white outline-blue-600 mobil640:py-[10px] mobil640:px-[20px]">
              <span className="">
                <SortIcon />
              </span>
              <p className="text-[#747474] text-[14px] text-nowrap ">
                {" "}
                Сортировать по
              </p>
            </button>
            <button
              className="sort hidden ml-[10px]  items-center justify-between gap-[10px] bg-white rounded-2xl py-[20px] px-[40px] hover:bg-blue-400 hover:outline-blue-700 hover:fill-white outline-blue-600 table1080:flex  mobil640:py-[10px] mobil640:px-[20px]"
              onClick={() => burgerFilter()}
            >
              <span>
                <FilterIcon />
              </span>
              <p className="text-[#747474] text-[14px] text-nowrap ">Filter</p>
            </button>
          </div>
        </div>

        <div className=" flex   w-full">
          <div className=" flex justify-between items-center gap-[10px] w-full">
            <div className=" w-full">
              <input
                className="w-full  py-[27.5px] px-[30px] rounded-xl border-transparent border-solid  outline-transparent hover:outline-blue-600 active:outline-blue-700 focus:outline-blue-600   desktop:py-[10px] desktop:px-[18px]"
                type="text"
                name="search"
                id="search"
                aria-label="search"
                placeholder="Искать по тексту в вопросе"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <button className="flex justify-between items-center gap-3 py-[30px] px-[60px] rounded-2xl outline-transparent bg-[#0129e3] hover:bg-[#012ae3da] active:outline-blue-600  focus:outline-blue-600   desktop:py-[10px] desktop:px-[18px]">
              <span className="fill-white">
                <SearchIcon />
              </span>
              <p className="text-white">Поиск</p>
            </button>
          </div>
        </div>
        {filteredData.map((item) => (
          <div key={item.id} className="">
            <Quetion
              number={item.number}
              date={item.date}
              autor={item.autor}
              gender={item.gender}
              quetion={item.quetion}
              doctor={item.doctor}
              category={item.category}
              askDate={item.askDate}
              ask={item.ask}
            />
          </div>
        ))}

        <Paggination />
      </div>
    </section>
  );
}

export default Quetions;
