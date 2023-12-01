import { BrowserRouter } from 'react-router-dom';
import { Landing } from './components';

const App = () => {
  return(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}
export default App;