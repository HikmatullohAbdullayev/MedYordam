import MapMarker from "../assets/icon/MapMarkerIcon";
import Select from "../components/Select";
import SelectLan from "../components/SelectLan";
import Logo from "../assets/img/Union.png";
import AppIcon from "../assets/icon/AppIcon";
import { nav } from "../data/nav";
import LoginIcon from "../assets/icon/LoginIcon";
import LogOut from "../assets/icon/LogOut";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import MenuIcon from "../assets/icon/MenuIcon";
import Modal from "../components/Modal";

function Header() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const [token, setToken] = useState("");

  useEffect(() => {
    changeToken();
  }, []);

  const changeToken = () => {
    const savedToken = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    setToken(savedToken);
  };
  const openModal = () => {
    setModal(!modal);
  };

  const burger = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="">
      <Modal
        setModal={setModal}
        modal={modal}
        openModal={openModal}
        changeToken={changeToken}
      />
      <div className="header_top py-[16px]  flex justify-between items-start ">
        <div className="py-[8px] flex justify-between items-start ">
          <span>
            <MapMarker />
          </span>
          <Select />
        </div>
        <div className="language">
          <SelectLan />
        </div>
      </div>
      <div className="header_main  flex justify-between items-center">
        <div className="flex justify-between py-[18px] px-[22px] rounded-2xl items-center bg-[#FFFFFF] desktop1350:py-[10px] tablemin845:px-[16px]">
          <div className="">
            <img
              className="w-[40px] tablemin845:w-[22px] tablemin845:py-[10px]"
              src={Logo}
              alt="logo"
            />
          </div>
          <h2 className="px-[20px]  text-[24px] font-bold tablemin845:text-[18px] tablemin845:px-[8px] mobile530:hidden">
            Med Yordam
          </h2>
          <p className="text-[#747474] ml-[20px] desktop1220:hidden">
            Консультация <br /> от врачей
          </p>
        </div>
        <div className="category flex justify-between items-center gap-3 bg-[#0129E3] py-[30px] px-[60px] rounded-2xl cursor-pointer hover:bg-[#012ae3cb] active:bg-[#0526b7] focus:bg-[#0526b7] desktop1350:px-[20px]  desktop1350:py-[20px]   ">
          <span>
            <AppIcon />
          </span>
          <button className="text-white text-[16px] table1005:hidden">
            Каталог услуг
          </button>
        </div>
        <nav className="py-[30px] px-[20px] rounded-2xl bg-white desktop1350:px-[18px]  desktop1350:py-[20px] mobile3:px-[10px] mobil675:hidden ">
          <ul className="flex justify-between items-center gap-[26px] mobile3:gap-[14px]  ">
            {nav.map((link) => (
              <li key={link.id}>
                <p className="text-[16px] text-[#747474] hover:text-blue-600 cursor-pointer">
                  {link.link}
                </p>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" hidden rounded-2xl bg-white  mobile3:p-[10px] mobil675:block ">
          <button onClick={() => burger()}>
            <span>
              <MenuIcon />
            </span>
          </button>
          <Nav open={open} setopen={setOpen} burger={burger} />
        </div>
        <div className="py-[30px] px-[60px] rounded-2xl bg-white desktop1350:px-[16px]  desktop1350:py-[16px]">
          <div
            onClick={() => openModal()}
            className="regis  desktop1220:hidden"
          >
            {token ? (
              <a className="text-[rgb(1,41,227)] text-[16px] font-medium"
                href="#"  > выход </a>
            ) : (
              <div className="">
                <a className="text-[rgb(1,41,227)] text-[16px] font-medium  "
                  href="#"
                > Вход{" "} </a>  /
                 <a className="text-[#0129E3]  text-[16px] font-medium "
                  href="#"
                >    Регистрация </a>
              </div>
            )}
          </div>

          <span  onClick={() => openModal()} className="hidden   hover:fill-blue-600 desktop1220:block">
            {
              !token ? <LoginIcon /> :<LogOut/>
             }
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
