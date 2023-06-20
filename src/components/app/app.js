import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const data = [
  {name: "Дмитро", salary:450, increase: false},
  {name: "Олександр", salary:500, increase: true},
  {name: "Олена", salary:600, increase: false}
]

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm />
    </div>
  );
}

export default App;
