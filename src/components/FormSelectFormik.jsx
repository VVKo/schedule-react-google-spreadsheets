
import {Field} from "formik";

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength - 1) + '…'; // Ellipsis character
};


const FormSelectFormik = ({list, name, label, size}) => {
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <Field as="select" className={`select select-bordered ${size}`} name={name}>
                {list.map((item) => {
                    const value = typeof item === 'object' ? item.value : item;
                    const label = typeof item === 'object' ? item.label : item;

                    return (
                        <option key={value} value={value}>
                            {truncateText(label, 40)} {/* Adjust 50 to your desired max length */}
                        </option>
                    );
                })}
            </Field>
        </div>

    );
};

export default FormSelectFormik;
