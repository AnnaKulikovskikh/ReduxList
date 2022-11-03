import './App.css'
import PeopleList from './components/ServiceList'
import AddPersonForm from './components/AddServiceForm'

function App() {
  return (
    <div className="App">    
      <AddPersonForm />
      <PeopleList />
    </div>
  );
}

export default App;
