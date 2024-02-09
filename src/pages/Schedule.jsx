import {Filters, Loading, ScheduleContainer, ScheduleMenu, Settings} from "../components/index.js";
import {Outlet, redirect, useActionData, useLoaderData, useNavigation} from "react-router-dom";
import {toast} from "react-toastify";
import {scheduleSlice} from "../store/slices/scheduleSlice.js";
import {useState} from "react";


export const loader = (store) =>
    async () => {

        console.log('loader Schedule')
        const state = store.getState()

        const queryKey = 'getConfigs({"method":"GET","payload":{"action":"config","values":{"func":"INFO","params":{"sheetName":"config"}},"xlsId":""}})';
        const queryData = state.REST.queries[queryKey];
        if (!queryData) {
            const user = store.getState().userState.user
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
                const params = ['1','2','3'];
                const products = {'boo': 'foo', 'foo':'boo'};
                const meta = {...data.data};
                return { products, meta, params };
            } else {
                console.log('loader Workplace ERROR')
                return null
            }

        }
        const {data} = queryData
        console.log('component Schedule load', data)
        const params = ['1','2','3'];

        // const response = await queryClient.ensureQueryData(
        //     allProductsQuery(params)
        // );
        const products = {'boo': 'foo', 'foo':'boo'};
        const meta = {...data.data};
        return { products, meta, params };
}

export const action =(store) => async ({ request }) => {
    const formData = await request.formData();
    const values = Object.fromEntries(formData);

    console.log('from filters',values);
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

};

const Schedule = () => {
    const navigation = useNavigation();


    const [group, setGroup] = useState('Оберіть групу')
    const [teacher, setTeacher] = useState('Оберіть викладача')
    const isPageLoading = navigation.state === 'loading';
    const { meta, params } = useLoaderData();
    const actionData = useActionData()
    if(!actionData) return <Settings meta={meta}/>
    const {full} = actionData
    const groups = [ ... new Set(full.map(o => o.group).join('+').split('+').map(g => g.split('гр')[0]))].sort()
    const teachers = [ ... new Set(full.map(o => o.pip))].sort()
    console.log(meta, params, full)
    const target = (group === 'Оберіть групу' && teacher === 'Оберіть викладача') ? ''
        : group !== 'Оберіть групу' ? {type: 'group', value: group} : {type: 'pip', value: teacher}
    return (
        <>
            {/*<Settings meta={meta}/>*/}
            {isPageLoading ? (
                <Loading />
            ) : (
                <>
                {/*<Filters/>*/}
                    <ScheduleMenu
                        groups={groups}
                        setGroup={setGroup}
                        group={group}
                        teachers={teachers}
                        setTeacher={setTeacher}
                        teacher={teacher}
                    />
                    {(group !== 'Оберіть групу' || teacher !== 'Оберіть викладача') && <ScheduleContainer target={target}/>}
                    {/*{teacher !== 'Оберіть викладача' && <ScheduleContainer/>}*/}

                </>
            )}

        </>
    );
};

export default Schedule;
