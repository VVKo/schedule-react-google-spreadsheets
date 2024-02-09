import Select from "react-select";


const FormReactSelect = ({name, label, options, defaultValue, size}) => {
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <Select
                classNamePrefix="daisy-select"
                classNames={{
                    control: (provided) => ({
                        ...provided,
                        // Add your daisyUI classes here
                        // Example: 'form-select' and 'form-primary' from daisyUI
                        className: `select select-bordered ${size}`,
                    }),
                    // control: () => "border border-gray-300 rounded-md",
                    // other parts can also be styled here
                }}
                // className={`select select-bordered ${size}`}
                defaultValue={options.filter(o=> o.label === defaultValue)}
                options={options}
                name={name}
            />
        </div>
    );
};

export default FormReactSelect;
