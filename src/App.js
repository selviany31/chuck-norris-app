import './styles/home.css';
import Header from './components/header'
import Home from './pages/home';
import Search from './pages/search'
import Category from './pages/category'
import { Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Header>
        
      </Header>
      <div className="content">
        <Route path='/category/:query' component={Category} />
        <Route path='/search/:query' component={Search} />
        <Route exact path='/' component={Home} />
      </div>
    </div>
  );
}

export default App;
