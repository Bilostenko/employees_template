import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { Component } from 'react';

import './app.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Дмитро", salary: 450, increase: false, id: 1 },
        { name: "Олександр", salary: 500, increase: false, id: 2 },
        { name: "Олена", salary: 600, increase: false, id: 3 }
      ]
    }
  }

  deleteItem = (id)=> {
    this.setState(({data}) =>{
      const index = data.findIndex(elem => elem.id == id);
      
      const before = data.slice(0, index);
      const after = data.slice(index+1) 

      return {
        data: [...before, ...after]
      }
    })
  }

  addItem = ()=>{
    this.setState(({data}) =>{
      
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm data={this.state.data} onAdd={this.addItem} />
      </div>
    );
  }

}

export default App;
