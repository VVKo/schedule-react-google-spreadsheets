import {Bs1Circle, Bs1Square, Bs2Circle, Bs2Square, BsFillGridFill, BsList} from "react-icons/bs";
import {useState} from "react";
import {useSelector} from "react-redux";
import {SimpleSchedule} from "./index.js";


const ScheduleContainer = ({target}) => {

    const {user} = useSelector((state)=> state.userState)


    const [week, setWeek] = useState('1');
    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${
            pattern === week
                ? 'btn-primary text-primary-content'
                : 'btn-ghost text-based-content'
        }`;
    };
    console.log('target', target)
    return (
        <>
            {/*HEADER*/}

            {typeof target !== 'object' ? (
                <h5 className='text-2xl mt-16'>
                    Оберіть групу або викладача
                </h5>
            ) : (
                <>
                    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
                        <h4 className='font-medium text-md'>
                            {target.value}
                        </h4>
                        <div className='flex gap-x-2'>
                            <button
                                type='button'
                                onClick={() => setWeek('1')}
                                className={setActiveStyles('1')}
                            >
                                <Bs1Circle size={32}/>
                            </button>
                            <button
                                type='button'
                                onClick={() => setWeek('2')}
                                className={setActiveStyles('2')}
                            >
                                <Bs2Circle size={32}/>
                            </button>
                        </div>
                    </div>
                    {/* SCHEDULE */}
                    <div>
                        {/*{layout === 'grid' ? (*/}
                        {/*    <>Тиждень</>*/}
                        {/*) : (*/}
                        {/*    <>День</>*/}
                        {/*)}*/}
                        <SimpleSchedule week={week} target={target} />
                    </div>
                </>)}

        </>
    );
};

export default ScheduleContainer;
