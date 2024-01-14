import { City } from "../type"
import { Button } from "./Button";

type DropdownFn<T, P = City> = (item: P) => T;
type Props = {
    cities: City[];
    onClick: DropdownFn<void>;
    isSelectedCity: DropdownFn<boolean>;
    selectAll: () => void;
    deleteAll: () => void;
}


export function Dropdown({ cities, onClick, isSelectedCity, selectAll, deleteAll }: Props) {
    return <div className="z-10 mt-2 h-96 overflow-scroll  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="inline-flex p-3 shadow-sm rounded-md mb-5" role="group">
            <Button onClick={selectAll} text="Select All" />
            <Button onClick={deleteAll} text="Delete All" />
        </div>
        <div className="py-1 px-1" role="none">
            {
                cities.map((city) => {
                    return <p
                        key={city.id}
                         className="flex items-center space-x-2 text-gray-700  px-4 py-2 text-sm hover:bg-slate-100"
                        role="menuitem" id="menu-item-0"
                    >
                        <input
                            type="checkbox"
                            className="cursor-pointer h-4 w-4 text-gray-600"
                            checked={isSelectedCity(city)}
                            onChange={() => onClick(city)}
                        />
                        <span>{city.name}</span>
                    </p>
                })
            }
        </div>
    </div>
}

