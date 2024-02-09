import React from 'react';
import {useSubmit} from "react-router-dom";
import {Form, Formik} from "formik";
import Select from "react-select";

const ScheduleMenu = ({groups, setGroup, teachers, setTeacher, group, teacher}) => {
    const optionsGroup =[{'value':"Оберіть групу", 'label':"Оберіть групу"},...groups.map(d => ({'value':d, 'label':d}))]
    const optionsTeacher =[{'value':"Оберіть викладача", 'label':"Оберіть викладача"},...teachers.map(d => ({'value':d, 'label':d}))]
    const handleChangeGroup = (selectedOption) => {
        setTeacher(optionsTeacher[0].value)
        setGroup(selectedOption.value)
    }
    const handleChangeTeacher = (selectedOption) => {
        setGroup(optionsGroup[0].value)
        setTeacher(selectedOption.value)
    }
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown dropdown-hover ">
                        <div tabIndex={0} role="button" className="btn m-1">{group}</div>
                        <ul tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {groups.map((gr,idx) => (<li key={idx} onClick={()=>{
                                setGroup(gr)
                                setTeacher('Оберіть викладача')
                            }}><a>{gr}</a></li>))}
                        </ul>
                    </div>

                    {/*<Select*/}
                    {/*    className="w-full"*/}
                    {/*    value={{'value': group, 'label': group}}*/}
                    {/*    defaultValue={optionsGroup[optionsGroup.findIndex(o => o.value === group)]}*/}
                    {/*    options={optionsGroup}*/}
                    {/*    onChange={handleChangeGroup}*/}
                    {/*    name='group'*/}
                    {/*/>*/}
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">РОЗКЛАД</a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">{teacher}</div>
                        <ul tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {teachers.map((gr, idx) => (<li key={idx} onClick={() => {
                                setTeacher(gr)
                                setGroup('Оберіть групу')
                            }}><a>{gr}</a></li>))}
                        </ul>
                    </div>
                    {/*<Select*/}
                    {/*    className="w-full"*/}
                    {/*    value={{'value': teacher, 'label': teacher}}*/}
                    {/*    defaultValue={{'value': teacher, 'label': teacher}}*/}
                    {/*    options={optionsTeacher}*/}
                    {/*    onChange={handleChangeTeacher}*/}
                    {/*    name='teacher'*/}
                    {/*/>*/}
                </div>
            </div>
        </>
    );
};

export default ScheduleMenu;
