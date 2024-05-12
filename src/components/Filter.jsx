import SearchIcon from "../assets/icon/SearchIcon";
import ClearIcon from "../assets/icon/ClearIcon";
import filters from "../data/filter";

function Filter({burgerFilter}) {
  return (
    <div className=" max-w-[335px] py-[30px] px-[20px] bg-white grid gap-[24px]">
      <div className="flex justify-between items-center">
        <p className="text-[20px]">
          Фильтрация <br /> по направлениям
        </p>
        <button className="text-red-600 text-[14px] flex items-center gap-[5px] cursor-pointer" onClick={()=> burgerFilter()}>
          {" "}
          <span>
            <ClearIcon />
          </span>{" "}
          Сбросить
        </button>
      </div>
      <div className="inp flex justify-between items-center bg-[#F8F8F8] placeholder:text-[#747474] rounded-2xl ">
        <input
          className="bg-transparent outline-transparent border-transparent p-[20px]  "
          type="text"
          name="search"
          id="searchCategory"
          placeholder="Поиск направления"
        />
        <label className="p-[20px]" htmlFor="searchCategory">
          <span>
            <SearchIcon />
          </span>
        </label>
      </div>
      <div className="chek grid gap-[24px]">
        {filters.map((item) => (
          <div key={item.id} className="flex justify-between items-center ">
            <div className="flex  gap-3 cursor-pointer hover:text-[#0129E3]">
              <input
                type="checkbox"
                name="category"
                id={`category-${item.id}`}
              />
              <label htmlFor={`category-${item.id}`}> {item.text}</label>
            </div>
            <p className="text-[#747474] text-[14px]">{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
