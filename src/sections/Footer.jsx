import logo from "../assets/img/Union.png"

function Footer() {
    return (
        <div className="bg-[#050B2B] ">
            <div className="container px-[20px] mx-auto max-w-[1440px]">
                <div className="logo flex ">
                    <div className="imgbl">
                        <img src={logo} alt="" />
                    </div>
                    <h3>Med Yordem</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;