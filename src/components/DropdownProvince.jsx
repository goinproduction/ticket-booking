import React from 'react';
import data from '../fixures/provinces.json';

const DropdownProvince = ({ setShowSelection, setLocation }) => {
    const handleProvinceSelection = (name) => {
        setLocation(name);
        setShowSelection(false);
    };
    return (
        <ul className='header-right__location-dropdown' id='custom-scrollbar'>
            {data.map((province) => (
                <li
                    key={province.id}
                    className='header-right__location-dropdown-list'
                    onClick={handleProvinceSelection.bind(this, province.name)}
                >
                    {province.name}
                </li>
            ))}
        </ul>
    );
};

export default DropdownProvince;
