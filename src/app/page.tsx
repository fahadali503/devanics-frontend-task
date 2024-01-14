'use client'
import { useEffect, useState } from 'react';
import data from './cities.json';
import { City } from './type';
import { EmptyList } from './components/EmptyList';
import { Dropdown } from './components/Dropdown';
import { List } from './components/List';



export default function Home() {
  const [cities, setCities] = useState<City[]>([]);
  const [selected, setSelected] = useState<City[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchCities();
  }, [])

  function fetchCities() {
    setCities(data as unknown as City[]);
  }

  function handleSelect(city: City) {
    if (selected.includes(city)) {
      setSelected(selected.filter(item => item.id !== city.id));
    } else {
      setSelected([...selected, city]);
    }
  }

  function isSelected(city: City) {
    return selected.includes(city);
  }

  function selectAll() {
    setSelected(cities);
  }


  function deleteAll() {
    setSelected([]);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
        Choose
      </label>
      <div
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-2"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selected.length === 0 ? <EmptyList
        /> : <List cities={selected}
          onClick={handleSelect}
        />}
      </div>
      {
        showDropdown ? <Dropdown
          deleteAll={deleteAll}
          selectAll={selectAll}
          cities={cities}
          onClick={handleSelect}
          isSelectedCity={isSelected}
        /> : null
      }
    </div>
  )
}
