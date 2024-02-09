import React from 'react';
import SimplePara from "./SimplePara.jsx";

const ukrDays = {
    Mon: {name:'понеділок','1': 'bg-blue-100', '2': 'bg-green-100'},
    Tue: {name:'вівторок','1': 'bg-blue-200', '2': 'bg-green-200'},
    Wed: {name:'середа' ,'1': 'bg-blue-300', '2': 'bg-green-300'},
    Thu: {name:'четвер' ,'1': 'bg-blue-400', '2': 'bg-green-400'},
    Fri: {name:'п`ятниця' ,'1': 'bg-blue-500', '2': 'bg-green-500'}
}
const colors = {
    Mon: 'bg-red-100',
    Tue: 'bg-red-200',
    Wed: 'bg-red-300',
    Thu: 'bg-red-400',
    Fri: 'bg-red-500'
}

const SimpleDay = ({day, week, data}) => {
    return (
        <div className="my-1 p-2 border-black border rounded-lg">
            <div className="navbar text-xl">
                <div className="navbar-center uppercase font-bold">
                    {ukrDays[day].name}
                </div>
            </div>
            <div className="flex flex-col ">
                <SimplePara week={week} para={1} list={data.filter(o => o[`${day}_${1}_${week}`])} day={day} color={ukrDays[day][week]}/>
                <SimplePara week={week} para={2} list={data.filter(o => o[`${day}_${2}_${week}`])} day={day} color={ukrDays[day][week]}/>
                <SimplePara week={week} para={3} list={data.filter(o => o[`${day}_${3}_${week}`])} day={day} color={ukrDays[day][week]}/>
                <SimplePara week={week} para={4} list={data.filter(o => o[`${day}_${4}_${week}`])} day={day} color={ukrDays[day][week]}/>
                <SimplePara week={week} para={5} list={data.filter(o => o[`${day}_${5}_${week}`])} day={day} color={ukrDays[day][week]}/>
                <SimplePara week={week} para={6} list={data.filter(o => o[`${day}_${6}_${week}`])} day={day} color={ukrDays[day][week]}/>
            </div>
        </div>
    );
};

export default SimpleDay;
