import FormSelect from "./FormSelect.jsx";
import {Link, useSubmit} from "react-router-dom";
import {Formik, useField, useFormik} from "formik";


const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const Filters = () => {
    // const submit = useSubmit();
    // const formik = useFormik({
    //     initialValues: {
    //         email: "",
    //         password: "",
    //         repeatPassword: "",
    //     },
    //     onSubmit: async (values) => {
    //         submit(values, { method: "post" });
    //     },
    // })
    return (
        <Formik initialValues={{email:''}} onSubmit={(values)=>{cnonsole.log(values)}}>
            {({values})=> (
                <form
                      className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jane@formik.com"
                    />
                    {/* CATEGORIES */}
                    <FormSelect
                        label='оберіть структурний підрозділ'
                        name='category'
                        list={['1', '2', '3']}
                        size='select-sm'
                        defaultValue={'category'}
                    />

                    {/* BUTTONS */}
                    <button type='submit' className='btn btn-primary btn-sm'>
                        search
                    </button>
                    <Link to='/schedule' className='btn btn-accent btn-sm'>
                        reset
                    </Link>
                </form>
            )}
        </Formik>

    );
};

export default Filters;
