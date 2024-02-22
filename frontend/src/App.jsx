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
  Payment,
  ResultTemplate,
  SubCategories,
  ProfilePage,
  Error,
} from "./components";
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    }

    initLocomotiveScroll();
  }, []);

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
