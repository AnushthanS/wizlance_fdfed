import { BrowserRouter , Routes , Route} from 'react-router-dom';
import { Landing, Login, SignUp, AdminPage } from './components';
import {
  Dashboard,
  IndexContent,
  OrdersContent,
  ProjectsContent,
  ProfileContent,
  SellerForm,
} from "./components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<IndexContent />} />
          <Route path="orders" element={<OrdersContent />} />
          <Route path="projects" element={<ProjectsContent />} />
          <Route path="profile" element={<ProfileContent />} />
        </Route>
        <Route path="/addgig" element={<SellerForm />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
