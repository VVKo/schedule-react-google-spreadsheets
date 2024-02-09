import {useSubmit} from "react-router-dom";
import {useSelector} from "react-redux";
import {Form, Formik} from "formik";
import FormSelectFormik from "./FormSelectFormik.jsx";

const StaffBegin = () => {
    const submit = useSubmit();
    const {user} = useSelector((state) => state.userState)

    const {settings} = user
    console.log(settings)
    const acYears = Object.keys(settings[0]).slice(2)
    return (
        <>
            <Formik initialValues={{...user}} onSubmit={(values)=> submit({...values, action:'choice'},{method: "post"})}>
                {({values})=>{
                    let depList = settings[0][values.currentAcademicYear].split(',').map(d => ({value: d, label: d}))
                    return (
                        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
                            <FormSelectFormik
                                list={acYears}
                                name="currentAcademicYear"
                                label='Оберіть начальний рік'
                                size='select-sm'
                            />
                            <FormSelectFormik
                                list={depList}
                                name="department"
                                label='Оберіть структурний підрозділ'
                                size='select-sm'
                            />
                            <FormSelectFormik
                                list={[{value:'fall', label:'Осінній семестр'},{value:'spring', label: 'Весняний семестр'}]}
                                name="currentSemester"
                                label='оберіть семестр'
                                size='select-sm'
                            />

                            {/* BUTTONS */}
                            <button type='submit' className='btn btn-primary btn-sm h-full'>
                                Перейти
                            </button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    );
};

export default StaffBegin;
