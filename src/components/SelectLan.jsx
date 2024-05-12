import { languange } from "../data/language";

function SelectLan() {
    return (
        <select className="px-16px  bg-transparent border-transparent outline-transparent active:outline-[#0129E3] focus:outline-[#0129E3]"  name="language" id="languange">
            
            {
                languange.map((lan) => (
                    
                    
                    <option className="" key={lan.id} value={lan.lan}>
                    {lan.lan}
                    </option>
                    
                ))
            }
    
    </select>
    );
}

export default SelectLan;