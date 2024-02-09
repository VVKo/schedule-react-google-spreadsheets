import {BsBook} from "react-icons/bs";
import {FcCollaboration} from "react-icons/fc";
import {CiLocationOn} from "react-icons/ci";
import {GiTeacher} from "react-icons/gi";
import {TbWindow} from "react-icons/tb";


const paraTime = {
    1: '08:20-09:40',
    2: '09:50-11:10',
    3: '11:30-12:50',
    4: '13:00-14:20',
    5: '14:40-16:00',
    6: '16:10-17:30'
}



const SimplePara = ({day,para,week,list, color}) => {
    return (
        <div className={`border-2 border-black rounded-lg grid grid-cols-[70px_1fr]`}>
            <div className="flex flex-col justify-center items-center mr-1">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-lg"> {para}</span>
                    <span className="text-xs size-1/2">{paraTime[para]}</span>
                </div>

            </div>
            <div className="flex flex-col sm:flex-row m-1">{list.length === 0 ?<div className="flex flex-1 justify-center items-center"><TbWindow size={50}/></div>:list.map(o => <div key={o.id} className="flex-col border rounded-md m-1 p-1">
                <div className="grid grid-cols-[32px_1fr] "><span className="pr-2"><BsBook size={30}/></span><span className="align-middle text-center">{o.disc}</span></div>
                <div className="grid grid-cols-[32px_1fr]" ><span className="pr-2"><FcCollaboration size={30} /></span><span className="align-middle text-center">{o.Type}</span></div>
                <div className="grid grid-cols-[32px_1fr]" ><span className="pr-2"><CiLocationOn size={30}/></span><span className="align-middle text-center">{o[`${day}_${para}_${week}`]}</span></div>
                <div className="grid grid-cols-[32px_1fr]" ><span className="pr-2"><GiTeacher size={30}/></span><span className="align-middle text-center">{o.teacher}</span></div>
            </div>)}</div>
        </div>
    );
};

export default SimplePara;
