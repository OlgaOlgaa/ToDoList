
import './App.css';
import { ToDoList } from './ToDoList';
import image from './coffee.png';
import imageTwo from './plant.png';

function App() {
  return (
    <div className='app' >
     <img src={image} width ='200px' alt='coffee'/>
     <ToDoList/>
     <img src={imageTwo} width ='200px' alt='coffee'/>
    </div>
  );
}

export default App;
