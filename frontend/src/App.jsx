import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';

const App = () => {
  return(
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}
export default App;