import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John Smith', salary: 800, increase: true, rise: true, id: 1 },
                { name: 'Alex Marks', salary: 3000, increase: false, rise: false, id: 2 },
                { name: 'Carl Wea', salary: 5000, increase: true, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all',
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
           return { data: data.filter(el => +el.id !== +id) };
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
           return {
               data: [...data, newItem]
           }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(el => +el.id === +id ? { ...el, [prop]: !el[prop] } : el)
        }));
    }

    searchEmployee = (items, term) => {
        if (term.trim().length === 0) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(term) > -1);
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterItems = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(el => el.rise);
            case 'moreThan1000':
                return items.filter(el => +el.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    onSalaryChanging = (id, value) => {
        this.setState(({data}) => ({
            data: data.map(el => +el.id === +id ? { ...el, salary: +value.slice(1) } : el)
        }));
    }

    render() {
        const { data, term, filter } = this.state;
        const totalEmployees = data.length;
        const extraPayoutEmployees = data.filter(el => el.increase).length;
        const visibleData = this.filterItems(this.searchEmployee(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    totalEmployees={totalEmployees}
                    extraPayoutEmployees={extraPayoutEmployees}
                />
                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryChanging={this.onSalaryChanging}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;