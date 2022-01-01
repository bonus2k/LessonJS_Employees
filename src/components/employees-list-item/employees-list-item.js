import "./employees-list-item.css"
import {Component} from "react";

class EmployeesListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    isIncrease = () => {
        this.setState(({increase})=>({
            increase: !increase
        }))
    }

    isLike = () => {
        this.setState(({like})=>({
            like: !like
        }))
    }

    render() {
        const {name, salary} = this.props;
        const {increase, like} = this.state;
        let liClassName = "list-group-item d-flex justify-content-between";
        liClassName = (increase) ? liClassName.concat(" increase") : liClassName;
        liClassName = (like) ? liClassName.concat(" like") : liClassName;

        return (
            <li className={liClassName}>
                <span className="list-group-item-label" onClick={this.isLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm"
                            onClick={this.isIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                            className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;