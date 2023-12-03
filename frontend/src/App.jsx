import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Landing, Login, SignUp, MainPage, Contact, AdminPage } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={< AdminPage/>} />
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
