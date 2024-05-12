import CloseMenu from "../assets/icon/CloseMenu";
import { nav } from "../data/nav";

function Nav( {open, burger} ) {

    return (
        <nav className={`w-[200px]  h-screen top-[0] transition-all  bg-white absolute ${open ? "left-[0px]" : "left-[-200px]" } `}>
           <div className="btn text-end ">
           <button onClick={() => burger()} className="  p-[10px] bg-slate-300 rounded-xl"><span>
            <CloseMenu/>
            </span></button>
           </div>
            <ul className="text-center flex flex-col justify-evenly h-full  ">
                {
                    nav.map((item) =>(
                        <li className="py-[10px] bg-slate-200 " key={item.id}>
                            <p>{item.link}</p>
                        </li>
                    ))
                }
            </ul>
           
            
        </nav>
    );
}

export default Nav;