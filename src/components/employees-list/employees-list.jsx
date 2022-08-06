import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChanging}) => {

    const employees = data.map(({id, ...itemProps}) => {
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryChanging={(e) => onSalaryChanging(id, e.currentTarget.value)}
            />
        );
    });

    return (
      <ul className="app-list list-group">
          {employees}
      </ul>
    );
}

export default EmployeesList;