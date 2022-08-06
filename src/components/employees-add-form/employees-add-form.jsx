import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;
        const { onAdd } = this.props;
        if (name.trim().length >= 3 && salary.length >= 1) {
            onAdd(name, salary);
            this.setState({
                name: '',
                salary: ''
            });
        }
    }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}
                >
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Employee's name"
                           name="name"
                           value={name}
                           onChange={this.onValueChange}
                    />
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="Employee's salary"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange}
                    />

                    <button type="submit" className="btn btn-outline-light">ADD EMPLOYEE</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;