import {scheduleSlice} from "../store/slices/scheduleSlice.js";
import {toast} from "react-toastify";
import {redirect, useActionData, useLoaderData, useNavigation} from "react-router-dom";
import StaffBegin from "../components/StaffBegin.jsx";
import {Loading, ScheduleContainer, ScheduleMenu} from "../components/index.js";
import StaffMenu from "../components/StaffMenu.jsx";



export const loader = (store) => async () => {
    console.log('loader Workplace')
    const user = store.getState().userState.user

    if (user.role === 'guest'){
        const obj = {
            token: user.token,
            method: 'GET',
            payload: {
                xlsId: '',
                action: 'config',
                values: {
                    func: 'INFO',
                    params: {
                        sheetName: 'config',
                    },
                },
            }}
        toast.info('Loading config ...')
        const resultAction = await store.dispatch(scheduleSlice.endpoints.getConfigs.initiate(obj));
        console.log('loader Workplace status',resultAction.status)
        if (resultAction.status === 'fulfilled') {
            // Data loading successful
            const data = resultAction.data;
            console.log('loader Workplace', data)
            toast.dismiss()
            return redirect('/schedule')
        } else {
            console.log('loader Workplace ERROR')
            return null
        }


    }



    return {settings: user.settings}

    // const obj = {
    //     token: user.token,
    //     method: 'GET',
    //     payload: {
    //         xlsId: '',
    //         action: 'roles',
    //         values: {
    //             func: 'INFO',
    //             params: {
    //                 sheetName: 'USERS',
    //             },
    //         },
    //     }}
    // toast.info('Loading...')
    // const resultAction = await store.dispatch(scheduleSlice.endpoints.getRoles.initiate(obj));
    // console.log('loader',resultAction.status)
    // if (resultAction.status === 'fulfilled') {
    //     // Data loading successful
    //     const data = resultAction.data;
    //     console.log('loader', data)
    //     toast.dismiss()
    //     return null
    // } else {
    //     console.log('loader ERROR')
    // }
}

export const action =(store) => async ({ request }) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);

    console.log('from filters', values);
    const obj = {
        token: "",
        method: 'GET',
        payload: {
            xlsId: '',
            action: 'full',
            values: {
                func: 'INFO',
                params: {
                    ...values
                },
            },
        }}
    toast.info('Loading data ...')
    const resultAction = await store.dispatch(scheduleSlice.endpoints.getFullSchedule.initiate(obj));

    if (resultAction.status === 'fulfilled') {
        // Data loading successful
        const data = resultAction.data;
        console.log('action Schedule', data)
        toast.dismiss()
        return {full: data.data.full}
    } else {
        console.log('action Schedule ERROR')
        return null
    }

    return null
}

const WorkPlace = () => {
    const navigation = useNavigation();
    // const { data, error, isFetching } = useGetRolesQuery({})
    // console.log('WorkPlace', data, error, isFetching);
    const actionData = useActionData()
    if(!actionData) return <StaffBegin/>
    const loaddata = useLoaderData()
    const isPageLoading = navigation.state === 'loading';
    console.log('WorkPlace', actionData, loaddata)
    return (
        <>
            {isPageLoading ? (
                <Loading />
            ) : (
                <>
                    {/*<Filters/>*/}
                    <StaffMenu />
                    Content
                    {JSON.stringify(actionData)}

                </>
            )}

        </>
    );
};

export default WorkPlace;
