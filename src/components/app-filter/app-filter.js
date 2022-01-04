import './app-filter.css'
import {Component} from "react";

class AppFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setFilter: {
                allEmp: true,
                isRise: false,
                is1000: false
            }
        }
    }

    setClassName = (key) => {
        if (this.state.setFilter[key]) {
            return 'btn btn-light';
        } else return 'btn btn-outline-light'
    }

    setButton = (e) => {
        const btn = e.target.getAttribute('data-state');
        let setBtn = {};
        if (btn === 'allEmp') {
            setBtn = {allEmp: true, isRise: false, is1000: false}

        } else {
            setBtn = {...this.state.setFilter, allEmp: false, [btn]: !this.state.setFilter[btn]}
        }
        this.setState(() => ({setFilter : setBtn}))
        this.props.setButton(setBtn)
    }


    render() {

        return (
            <div className="btn-group">
                <button className={this.setClassName('allEmp')}
                        type="button"
                        data-state="allEmp"
                        onClick={this.setButton}>
                    Все сотрудники
                </button>
                <button className={this.setClassName('isRise')}
                        type="button"
                        data-state="isRise"
                        onClick={this.setButton}>
                    На повышение
                </button>
                <button className={this.setClassName('is1000')}
                        type="button"
                        data-state="is1000"
                        onClick={this.setButton}>
                    З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;