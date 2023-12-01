import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Landing } from './components';
import LoginPage  from './components/Login'
import SignUpPage from './components/SignUp'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;