import { useState } from 'react';
import "./Style.css";

function Child2(props) {
    const { toDo, handleDelete, index } = props;
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>

            <ul className="list-group">
                <li className="list-group-item shadow-sm p-3 mb-4 bg-body-tertiary rounded d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <span className="me-2 todo-number">{index + 1}.</span>
                        <input className="form-check-input me-3 custom-checkbox" type="checkbox" value="" id={`checkbox-${index}`}
                            onChange={handleCheckboxChange}
                        />
                        <label className={`form-check-label ${isChecked ? "text-decoration-line-through" : ""}`}
                            htmlFor={`checkbox-${index}`}>{toDo}</label>
                    </div>
                    <button type="button" className="btn-close ms-2" aria-label="Close"
                        onClick={() => { handleDelete(index) }}
                    ></button>
                </li>
            </ul>

        </div>
    );
}
export default Child2;