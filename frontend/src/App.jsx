import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  Payment,
  ResultTemplate,
  SubCategories,
  ProfilePage,
  Error,
} from "./components";
import { useSelector } from 'react-redux';

const App = () => {

  const user = useSelector((state) => state?.user?.user);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />}>
          {user?.isFreelancer ? <Route index element={<IndexContent />} /> : <Route path="profile" index element={<ProfileContent />} />}
            <Route path="orders" element={<OrdersContent />} />
            <Route path="projects" element={<ProjectsContent />} />
         
          </Route>
          <Route path="/addgig" element={<SellerForm />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment/:orderId" element={<Payment />} />
          <Route path="/gigdetails/:gigId" element={<ProfilePage />} />
          <Route path="/subcategories/:categoryId" element={<SubCategories />} />
          <Route path="/gigs/:subcategoryId" element={<ResultTemplate />} />

          {/* Catch-all route for unmatched routes */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
};
export default App;
