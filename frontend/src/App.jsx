import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Landing, Login, SignUp, AdminPage } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={< AdminPage/>} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;
