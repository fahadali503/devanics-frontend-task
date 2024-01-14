import { City } from "../type";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
    cities: City[];
    onClick: (item: City) => void;
}
export function List({ cities, onClick }: Props) {
    return <div className="flex items-start space-x-2  flex-wrap max-h-20 overflow-y-auto">
        {cities.map((city) => {
            return <p
                key={city.id}
                className="flex items-start space-x-2 rounded-full mt-1 text-gray-700  px-2 border-1 text-sm bg-slate-200"
            >
                <span>{city.name}</span>
                <IoCloseOutline className="cursor-pointer"
                    size={19}
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(city);
                    }}
                />
            </p>

        })}
    </div>
}