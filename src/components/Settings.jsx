import FormSelect from "./FormSelect.jsx";
import {Formik, Form} from "formik";
import FormSelectFormik from "./FormSelectFormik.jsx";
import {useSelector} from "react-redux";
import {useSubmit} from "react-router-dom";




const Settings = ({meta}) => {
    const submit = useSubmit();
    const {user} = useSelector((state) => state.userState)
    // console.log('Formik', user, meta)
    return (
        <Formik
            initialValues={{...user}}
            onSubmit={(values)=>submit(values, { method: "post" })}>

            {({values})=> (<Form
                    className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
                    {/*<FormSelect*/}
                    {/*    label='оберіть начальний рік'*/}
                    {/*    name='currentYear'*/}
                    {/*    list={['1', '2', '3', 'category']}*/}
                    {/*    size='select-sm'*/}
                    {/*    defaultValue={'category'}*/}
                    {/*/>*/}
                    <FormSelectFormik
                        list={meta.academicYears}
                        name="currentAcademicYear"
                        label='оберіть начальний рік'
                        size='select-sm'
                    />
                    <FormSelectFormik
                        list={[{value:'fall', label:'Осінній семестр'},{value:'spring', label: 'Весняний семестр'}]}
                        name="currentSemester"
                        label='оберіть семестр'
                        size='select-sm'
                    />
                    <FormSelectFormik
                        list={meta.departments}
                        name="department"
                        label='оберіть структурний підрозділ'
                        size='select-sm'
                    />
                    {/*<FormSelect*/}
                    {/*    label='оберіть начальний рік'*/}
                    {/*    name='category'*/}
                    {/*    list={['1', '2', '3', 'category']}*/}
                    {/*    size='select-sm'*/}
                    {/*    defaultValue={'category'}*/}
                    {/*/>*/}
                    {/*<FormSelect*/}
                    {/*    label='оберіть семестр'*/}
                    {/*    name='category'*/}
                    {/*    list={['1', '2', '3', 'category']}*/}
                    {/*    size='select-sm'*/}
                    {/*    defaultValue={'category'}*/}
                    {/*/>*/}

                    {/* BUTTONS */}
                    <button type='submit' className='btn btn-primary btn-sm h-full'>
                        Перейти
                    </button>
                </Form>)}
        </Formik>

    );
};

export default Settings;
