import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John B.', salary: 800, increase: true, id: 1},
                {name: 'Alex S.', salary: 1100, increase: true, id: 2},
                {name: 'Ann D.', salary: 1800, increase: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    createItem = (event, obj) => {
        event.preventDefault();
        const countMaxId = (previousValue, currentValue) => {
            return previousValue > currentValue.id ? previousValue + 1 : currentValue.id + 1;
        };
        obj['id']=this.state.data.reduce(countMaxId, 0);
        this.setState(({data})=>{
            return {
                data: [...data, obj]
            }
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={data} onDelete={(id) => this.deleteItem(id)}/>
                <EmployeesAddForm onCreate={(event, obj) => this.createItem(event, obj)}/>
            </div>
        )
    }
}

export default App;