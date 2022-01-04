import "./employees-list-item.css"

function EmployeesListItem(props) {

    const {name, salary, increase, rise, onDelete, onToggleProp} = props;
    let liClassName = "list-group-item d-flex justify-content-between";
    liClassName = (increase) ? liClassName.concat(" increase") : liClassName;
    liClassName = (rise) ? liClassName.concat(" like") : liClassName;

    return (
        <li className={liClassName}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle="rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;