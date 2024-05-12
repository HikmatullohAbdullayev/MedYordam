import { regions } from "../data/region";

function Select() {
  return ( 
    <select className="w-[100px]   bg-transparent border-transparent outline-transparent active:outline-[#0129E3] focus:outline-[#0129E3]" name="regions" id="regions" aria-label="regions">
      {regions.map((region) => (
        <option key={region.id} className=" " value={region.region}>
          {region.region}
        </option>
      ))}
    </select>
  );
}

export default Select;
