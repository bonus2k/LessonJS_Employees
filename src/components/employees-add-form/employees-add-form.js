import "./employees-add-form.css"
import {Component} from "react";

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            increase: false,
            rise: false
        }
    }

    onInputValue = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;
        const {onCreate} = this.props;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" method="POST">
                    <input type="text" className="form-control new-post-label"
                           name="name"
                           value={name}
                           onChange={this.onInputValue}
                           placeholder="Как его зовут?"/>
                    <input type="number" className="form-control new-post-label"
                           name="salary"
                           value={salary}
                           onChange={this.onInputValue}
                           placeholder="З/П в $?"/>
                    <button type="submit"
                            onClick={(event => onCreate(event, name, salary))}
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;