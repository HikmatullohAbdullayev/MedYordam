import StarIcon from "../assets/icon/StarIcon"
import QuestionIcon from "../assets/icon/QuestionIcon"
import FilesIcon from "../assets/icon/FilesIcon"
import { hero } from "../data/hero";

function Hero() {
    return (
        <section className="rounded-[26px] hero text-center mt-[20px] pt-[70px] py-[40px] px-[20px]"  >
            <div className="">
                <p className="w-[209px] mx-auto text-[#FFFFFF] text-[14px] py-[10px] px-[20px] border border-solid border-[#FFFFFF] rounded-[200px] bg-transparent hover:bg-[#FFFFFF] hover:text-blue-500  ">
                Консультация от врачей
                </p>
                <h1 className="text-[60px] font-medium text-white max-w-[900px] mx-auto  table1005:text-[36px] " >
                Получайте бесплатную консультацию от лучших специалистов
                </h1>
            </div>
            <div className="flex justify-evenly items-center gap-[20px] flex-wrap mx-auto mt-[60px] ">
                <div className="flex justify-evenly items-center gap-3 bg-white py-[30px] px-[60px] rounded-2xl mobile530:px-[30px] mobile530:py-[14px] ">
                    <span>
                        <StarIcon/>
                    </span>
                    <p>
                    Лучшие консультанты
                    </p>
                </div>
                <div className="flex justify-evenly items-center gap-3 bg-white py-[30px] px-[60px] rounded-2xl mobile530:px-[30px] mobile530:py-[14px] ">
                    <span>
                        <QuestionIcon/>
                    </span>
                    <p>
                    Задать вопрос
                    </p>
                </div>
                <div className="flex justify-evenly items-center gap-3 bg-white py-[30px] px-[60px] rounded-2xl mobile530:px-[30px] mobile530:py-[14px] " >
                    <span>
                        <FilesIcon/>
                    </span>
                    <p>
                    Популярные вопросы
                    </p>
                </div>
            </div>
            <div className=" media gap-6 grid grid-cols-4 mt-[28px] px-[30px] table1170:grid-cols-2  mobil675:block ">
                {
                    hero.map((item) =>(
                       <div key={item.id} className=" text-start py-[26px] px-[24px] rounded-2xl border border-solid border-white mobil675:my-[20px]  mobile530:px-[30px] mobile530:py-[14px] ">
                         <p className="font-medium text-[50px] text-white mobile530:text-[34px]">{item.number}</p>
                        <p className=" text-[16px] text-white " >{item.text}</p>
                       </div>
                        
                    ))
                }
            </div>
        </section>
    );
}

export default Hero;