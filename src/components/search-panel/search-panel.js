import './search-panel.css'
import {Component} from "react";

class SearchPanel extends Component{

    constructor(props) {
        super(props);
        this.state = {
            search:''
        }
    }

    updateSearch = (search) =>{
        this.setState({search})
        this.props.updateSearch(search);
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
                   value={this.state.search}
                onChange={event=>this.updateSearch(event.target.value)}
            />
        );
    }
};

export default SearchPanel;