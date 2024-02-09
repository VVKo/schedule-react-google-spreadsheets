import {useActionData} from "react-router-dom";
import SimplePara from "./SimplePara";
import SimpleDay from "./SimpleDay";


const SimpleSchedule = ({week, target}) => {
    const {full} = useActionData()
    const data = target.type === 'group' ? full.filter(o => o.group.includes(`${target.value}гр`)).map(o=>({...o, teacher: o.pip}))
        : full.filter(o => o.pip === target.value).map(o=>({...o, teacher: o.group}))
    return (
        <>
            {week}-й тиждень
            <div className="flex flex-col">
                <SimpleDay week={week} day={'Mon'} data={data} />
                <SimpleDay week={week} day={'Tue'} data={data} />
                <SimpleDay week={week} day={'Wed'} data={data} />
                <SimpleDay week={week} day={'Thu'} data={data} />
                <SimpleDay week={week} day={'Fri'} data={data} />
            </div>

            {JSON.stringify(data)}
        </>
    );
};

export default SimpleSchedule;
