import './app-info.css';

const AppInfo = ({totalEmployees, extraPayoutEmployees}) => {
    return (
      <div className="app-info">
          <h1>Accounting of employees in the company</h1>
          <h2>Total number of employees: {totalEmployees}</h2>
          <h2>Will receive an extra payout: {extraPayoutEmployees}</h2>
      </div>
    );
}

export default AppInfo;