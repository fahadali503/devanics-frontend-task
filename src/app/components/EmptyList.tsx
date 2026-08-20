import { FaChevronDown } from "react-icons/fa";

export function EmptyList() {
    return <div
        className="flex justify-between cursor-pointer items-center pr-5">
        <p>Select City</p>
        <FaChevronDown />
    </div>
}