import logo from "../assets/img/Union.png"
import footerData1 from "../data/footerData1"
import footerData2 from "../data/footerData2"
import footerData3 from "../data/footerData3"

function Footer() {
    return (
        <div className="bg-[#050B2B]  pt-[80px] pb-[30px]">
            <div className="container   px-[20px] mx-auto max-w-[1440px] text-white">
                <div className="flex justify-between items-start flex-wrap mx-auto gap-[50px] pb-[20px] px-[30px]">
                <div className="loogbloc">
                <div className="logo flex items-center gap-[10px]">
                    <div className="imgbl">
                        <img src={logo} alt="" />
                    </div>
                    <h3 className="text-[30px]">Med Yordem</h3>
                </div>
                <p className="py-[9px] cursor-pointer hover:text-blue-500" >
                Консультация от врачей
                </p>
                </div>

                <div className="">
                    <h3 className="text-[14px] pb-[24px] cursor-pointer hover:text-blue-500">Каталог услуг</h3>
                    <ul className="">

                    {
                        footerData1.map((item) =>(
                            <li className="py-[9px] cursor-pointer hover:text-blue-500" key={item.id}>
                                {item.text}
                            </li>
                        ))
                    }
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-[14px] pb-[24px] cursor-pointer hover:text-blue-500">Выполнить</h3>
                    <ul>

                    {
                        footerData2.map((item) =>(
                            <li className="py-[9px] cursor-pointer hover:text-blue-500"  key={item.id}>
                                {item.text}
                            </li>
                        ))
                    }
                    </ul>
                </div>

                <div className="">
                    <h3 className="text-[14px] pb-[24px] cursor-pointer hover:text-blue-500">Проект</h3>
                    <ul>

                    {
                        footerData3.map((item) =>(
                            <li className="py-[9px] cursor-pointer hover:text-blue-500"  key={item.id}>
                                {item.text}
                            </li>
                        ))
                    }
                    </ul>
                </div>
                </div>
                <span className="block bg-[#1E2441] h-[1px] w-full"></span>
               
                <div className="flex justify-between items-center flex-wrap gap-[20px] mx-auto py-[30px] ">
                    <p className=" px-[10px]">MedYordam 2024 - Все права защищены</p>
                    <p className=" px-[10px]">Обработка данных</p>
                    <p className=" px-[10px]">Условия использования</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;