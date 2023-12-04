import { BrowserRouter , Routes , Route} from 'react-router-dom';
import {
  Dashboard,
  IndexContent,
  OrdersContent,
  ProjectsContent,
  ProfileContent,
  SellerForm,
} from "./components/Dashboard";
import {
  Landing,
  Login,
  SignUp,
  MainPage,
  Contact,
  AdminPage,
  SubCategories,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<IndexContent />} />
          <Route path="orders" element={<OrdersContent />} />
          <Route path="projects" element={<ProjectsContent />} />
          <Route path="profile" element={<ProfileContent />} />
        </Route>
        <Route path="/addgig" element={<SellerForm />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/subcategories/:categoryId" element={<SubCategories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
