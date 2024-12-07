import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

function Child1(props) {
    const { handleAdd } = props;
    const [toDoForm, setToDoForm] = useState("");
    const [toDoError, setToDoError] = useState("");

    const handleChange = (event) => {
        setToDoForm(event.target.value)
        if (event.target.value.length > 0) {
            setToDoError("");
        }
    }
    

    const handleOnClick = () => {
        if (toDoForm.trim() === "") {
            setToDoError("Please enter a task.");
            return;
        }
        handleAdd(toDoForm)
        setToDoForm("");
    }
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control py-3"
                    placeholder="Enter a to-do task..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    value={toDoForm}
                    onChange={(event) => {
                        handleChange(event);
                    }}

                />

                <button className="btn btn-light p-4 add-buttot"
                    type="submit" id="button-addon2"
                    onClick={
                        handleOnClick
                    }
                    disabled={toDoError ? true : false}
                >ADD</button>
            </div>

            {
                toDoError && <div class="alert alert-danger" role="alert">
                    <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#58151c" }} />&nbsp;&nbsp;{toDoError}
                </div>
            }
        </>
    );
}
export default Child1;

