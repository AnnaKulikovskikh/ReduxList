import './App.css'
import ServiceList from './components/ServiceList'
import AddServiceForm from './components/AddServiceForm'

function App() {
  return (
    <div className="App">    
      <AddServiceForm />
      <ServiceList />
    </div>
  );
}

export default App;
