import { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import "./Style.css";
function Parent() {
    const [ToDoArray, setToDoArray] = useState([]);

    const handleAdd = (toDoForm) => {
        setToDoArray([...ToDoArray, toDoForm]);
        console.log(toDoForm)
    };
    const handleDelete = (ToDoIndex) => {
        const filteredArr = ToDoArray.filter((_, index) => index !== ToDoIndex);
        setToDoArray(filteredArr);
    };

    return (
        <div className='shadow-box'>
            <div className="d-flex align-items-center gap-4 bigger_headline">
            <p className='ToDoText'>To-do List APP</p> 
            <FontAwesomeIcon icon={faListCheck} style={{ fontSize: "55px" }}/>
            </div>
            <Child1 handleAdd={handleAdd} />
            <p className="smaller-headline">Let's get some work done!</p>
            {ToDoArray.map((toDo, index) => {
                console.log(toDo,index)
                return (
                    <Child2 toDo={toDo} handleDelete={handleDelete} index={index} />
                )
            })}
        </div>
    );
}
export default Parent;