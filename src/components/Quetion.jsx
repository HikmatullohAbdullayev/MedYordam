import img from  "../../src/assets/img/doctor.png"

function Quetion({
  number,
  date,
  autor,
  gender,
  quetion,
  doctor,
  category,
  askDate,
  ask,
}) {
  return (
    <div className="quetion mt-[34px] rounded-2xl">
      <div className="item bg-white rounded-2xl pb-[17px] ">
        <div className="data hero px-[24px] py-[16.5px] rounded-t-2xl    flex  justify-between text-white ">
          <p>Вопрос: {number}</p>
          <data value="Январь 27, 2024 9:41 pm">{date}</data>
        </div>

        <div className="savol">
          <div className="px-[18px] py-[25px] flex gap-4 items-start   ">
            <div className="a bg-[#F8F8F8] px-[16px]  rounded-b-2xl rounded-s-2xl">
              <div className="ask flex justify-between items-center py-[18px]">
                <p className="text-[#0129E3]">Получено ответов (3)</p>
                <p className="text-[#747474] text-[16px]">{autor}</p>
              </div>
              <hr />
              <div className="py-[18px]">
                {quetion}{" "}
                <span className="underline cursor-pointer text-[#747474]">
                  {" "}
                  Читать полностью
                </span>
              </div>
            </div>
            <div className="imgBlock ">
              <img  className="rounded-full max-w-[70px] mobile530:max-w-[50px]"  src={gender} alt="img" />
            </div>
          </div>

          <div className="px-[18px] py-[25px] flex gap-4 items-start   ">
            <div className="imgBlock ">
              <img
                className="rounded-full max-w-[70px] mobile530:max-w-[50px] border-[2px] border-solid border-[#0129E3]"
                src={img}
                alt=""
              />
            </div>
            <div className="a  py-[20px] px-[16px] text-white bg-[#0129E3] rounded-b-2xl rounded-r-2xl">
              <div className="ask flex justify-between items-center py-[12px]">
                <p>
                  {doctor} ({category})
                </p>
                <p>{askDate}</p>
              </div>
              <hr />
              <div className="py-[18px]">
                {ask}{" "}
                <span className="underline cursor-pointer text-white">
                  {" "}
                  Читать полностью
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="  w-[97%] rounded-2xl text-center bg-[#F8F8F8] py-[20px]    mx-auto hover:bg-[#d9d3d3dc] cursor-pointer">
          <p className="text-[#747474] w-full">Смотреть все ответы (2)</p>
        </div>
      </div>
    </div>
  );
}

export default Quetion;
