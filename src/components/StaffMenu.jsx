import React from 'react';
import Select from "react-select";
import {useSelector} from "react-redux";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const getCustomStyles = (theme) => {
    const isDracula = theme === 'dracula';

    return {
        control: (base) => ({
            ...base,
            backgroundColor: isDracula ? '#282a36' : 'white',
            borderColor: isDracula ? '#44475a' : '#d1d5db',
            color: isDracula ? 'white' : 'black',
            boxShadow: isDracula ? 'none' : base.boxShadow,
            '&:hover': {
                borderColor: isDracula ? '#6272a4' : base['&:hover'].borderColor,
            },
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: isDracula ? '#282a36' : 'white',
            color: isDracula ? 'white' : 'black',
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: isDracula
                ? state.isFocused ? '#44475a' : '#282a36'
                : state.isFocused ? '#f3f4f6' : null,
            color: isDracula ? 'white' : 'black',
            ':active': {
                backgroundColor: isDracula ? '#6272a4' : base[':active'].backgroundColor,
            },
        }),
        singleValue: (base) => ({
            ...base,
            color: isDracula ? 'white' : 'black',
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: isDracula ? '#44475a' : '#e2e8f0',
            color: isDracula ? 'white' : 'black',
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: isDracula ? 'white' : 'black',
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: isDracula ? 'white' : 'black',
            ':hover': {
                backgroundColor: isDracula ? '#6272a4' : '#cbd5e1',
                color: isDracula ? 'white' : 'black',
            },
        }),
        // Add other styles for sub-components as needed
    };
};

const StaffMenu = () => {
    const {theme} = useSelector((state)=> state.userState)
    return (
        <>
            <div className="navbar bg-base-100">
                {theme}
                <Select
                    options={options}
                    styles={getCustomStyles(theme)}
                    isMulti={true}
                />
            </div>
        </>
    );
};

export default StaffMenu;
