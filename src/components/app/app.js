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
                {name: 'John B.', salary: 800, increase: true, rise: false, id: 1},
                {name: 'Alex S.', salary: 1100, increase: true, rise: true, id: 2},
                {name: 'Ann D.', salary: 1800, increase: false, rise: false, id: 3}
            ],
            search: '',
            setFilter: {
                allEmp: true,
                isRise: false,
                is1000: false
            }
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    createItem = (event, name, salary) => {
        event.preventDefault();
        if (name && salary && !this.state.data.filter(item => item.name === name).length) {

            const countMaxId = (previousValue, currentValue) => {
                return previousValue > currentValue.id ? previousValue + 1 : currentValue.id + 1;
            };

            const newItem = {
                id: this.state.data.reduce(countMaxId, 0),
                name: name,
                salary: salary,
                increase: true,
                rise: true
            }

            this.setState(({data}) => {
                return {
                    data: [...data, newItem]
                }
            })
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        item = {...item, [prop]: !item[prop]}
                    }
                    return item;
                })
            }
        })
    }

    searchItem = (data, search) => {
        if (!search) {
            return data
        }
        return data.filter(item => item.name.includes(search));
    }

    updateSearch = (search) => {
        this.setState({search})
    }

    updateButtonFilter = (setFilter) => {
        this.setState({setFilter})
    }

    filterItem = (data) => {
        const {allEmp, isRise, is1000} = this.state.setFilter;
        if (allEmp){
            return data;
        }

        if (isRise) {
            data = data.filter(item => item.rise);
        }
        if (is1000) {
            data = data.filter(item => item.salary > 1000)
        }
        return data;
    }



    render() {
        const {data, search} = this.state,
            countEmployees = this.state.data.length,
            countIsIncreaseEmp = this.state.data.filter(item => item.increase).length,
            searchData = this.searchItem(data, search);

        return (
            <div className="app">
                <AppInfo countEmployees={countEmployees}
                         countIsIncreaseEmp={countIsIncreaseEmp}/>
                <div className="search-panel">
                    <SearchPanel updateSearch={this.updateSearch}/>
                    <AppFilter setButton={this.updateButtonFilter}/>
                </div>
                <EmployeesList
                    data={this.filterItem(searchData)}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onCreate={(event, name, salary) => this.createItem(event, name, salary)}/>
            </div>
        )
    }
}

export default App;