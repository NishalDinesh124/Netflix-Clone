
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,comedy,horror,romance,documentary,trending} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Trending' isSmall url={trending}/>
      <RowPost title='Action' isSmall url={action}/>
      <RowPost title='Romance' isSmall url={romance}/>
      <RowPost title='Horror' isSmall url={horror}/>
      <RowPost title='Comedy' isSmall url={comedy}/>
      <RowPost title='Documentary' isSmall url={documentary}/>

    </div>
  );
}

export default App;
