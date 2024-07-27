import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/storeSetup.ts';

import App from './App.tsx'
import './index.css'
import Home from './pages/Home/Home.pages.tsx';
import Tour from './pages/Tours/Tour.pages.tsx';
import Login from './pages/Login/Login.pages.tsx';
import Signup from './pages/Signup/Signup.pages.tsx';
import AccountRecovery from './pages/AccountRecovery/AccountRecovery.pages.tsx';
import VerifyCode from './pages/VerifyCode/VerifyCode.pages.tsx';
import UserAccount from './pages/UserAccount/UserAccount.pages.tsx';
import UserAccountUpdate from './pages/UserAccountUpdate/UserAccountUpdate.pages.tsx';
import AccountSecurity from './pages/AccountSecurity/AccountSecurity.pages.tsx';
import UsersBookings from './pages/UsersBookings/UsersBookings.pages.tsx';
import UsersReviews from './pages/UsersReviews/UsersReviews.pages.tsx';
import ToursManageMain from './pages/ToursManage/ToursManageMain/ToursManageMain.pages.tsx';
import ToursUpdate from './pages/ToursManage/ToursUpdate/ToursUpdate.pages.tsx';
import ToursCreate from './pages/ToursManage/ToursCreate/ToursCreate.pages.tsx';
import UsersMainManage from './pages/UsersManage/UsersMain/UsersMain.pages.tsx';
import UsersCreateManage from './pages/UsersManage/UsersEdit/UsersEdit.pages.tsx';
import ReviewsManage from './pages/ReviewsManage/ReviewsManage.pages.tsx';
import BookingsManage from './pages/BookingsManage/BookingsManage.components.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="tours/64bd36868b4c62a9cb577d8b" element={<Tour />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<Signup />} />
      <Route path="auth/forgotpassword" element={<AccountRecovery />} />
      <Route path="verifycode" element={<VerifyCode />} />
      <Route path="account/profile" element={<UserAccount />} />
      <Route path="account/profile/update" element={<UserAccountUpdate />} />
      <Route path="account/security" element={<AccountSecurity />} />
      <Route path="account/bookings" element={<UsersBookings />} />
      <Route path="account/reviews" element={<UsersReviews />} />

      <Route path="manage/tours" element={<ToursManageMain />} />
      <Route path="manage/tours/edit" element={<ToursUpdate />} />
      <Route path="manage/tours/create" element={<ToursCreate />} />

      <Route path="manage/users" element={<UsersMainManage />} />
      <Route path="manage/users/edit" element={<UsersCreateManage />} />

      <Route path="manage/reviews" element={<ReviewsManage />} />
      <Route path="manage/bookings" element={<BookingsManage />} />

      <Route path="*" element="<h1>hello</h1>" />
    </Route>
  )
);

const content_wrapper = document.getElementById('content__wrapper') as HTMLElement;
const root = createRoot(content_wrapper);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
)
