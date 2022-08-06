import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
    const buttonsData = [
        { name: 'all', label: 'ALL EMPLOYEES' },
        { name: 'rise', label: 'EMPLOYEES WITH SALARY UPGRADING ' },
        { name: 'moreThan1000', label: 'SALARY MORE THAN $1000' }
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const additionalClass = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${additionalClass}`}
                type="button"
                key={name}
                onClick={() => onFilterSelect(name)}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;