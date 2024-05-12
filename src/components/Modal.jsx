import { useRef } from "react";

function Modal({ setModal, openModal, modal, changeToken }) {
  const input1Ref = useRef();
  const input2Ref = useRef();

  const handleButtonClick = (e) => {
    e.preventDefault();

    const inputs = {
      input1: input1Ref.current.value,
      input2: input2Ref.current.value,
    };

    console.log("Malumot 1: ", inputs);
    localStorage.setItem("token", JSON.stringify(inputs));
    setModal(!modal);
     input1Ref.current.value = "",
       input2Ref.current.value = "",
    changeToken();
  };

  return (
    <div
      className={` ${
        modal ? "block" : "hidden"
      }  shadow-lg absolute w-full  h-full left-0 pt-[100px]  bg-[#21212144]  `}
    >
      <div className="modalbox fixed rounded-xl z-10 w-[300px] h-[290px] max-w-[100vw] max-h-[100dvh] m-auto inset-0   p-[20px] bg-white">
        <div className="flex justify-end  ">
          <button
            className=" rounded-xl inline-block w-[20px] text-center  py-[10px] px-[20px] bg-red-600 focus:outline-blue-500"
            onClick={() => openModal()}
          >
            x
          </button>
        </div>

        <form className="py-[10px] px-[20px] shadow-xl rounded-xl">
          <div className="inp grid gap-[10px]">
            <div className="email">
              <label htmlFor="email">Email</label>
            </div>
            <div className="inp">
              <input
                className="w-full  py-[5px] px-[12px] rounded-xl border-transparent border-solid  outline-transparent hover:outline-blue-600 active:outline-blue-700 focus:outline-blue-600  "
                ref={input1Ref}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label htmlFor="Password">Password</label>
            </div>
            <div className="password">
              <input
                className="w-full  py-[5px] px-[12px] rounded-xl border-transparent border-solid  outline-transparent hover:outline-blue-600 active:outline-blue-700 focus:outline-blue-600  "
                ref={input2Ref}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="btn mt-[10px]">
            <button
              className="w-full mx-auto inline-block py-[10px] px-[20px] bg-blue-500 rounded-2xl border-transparent outline-transparent text-white hover:bg-blue-600 active:outline-blue-500 active:bg-blue-700  focus:bg-blue-700 focus:outline-blue-500 "
              onClick={handleButtonClick}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
