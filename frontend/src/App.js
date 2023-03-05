import {BrowserRouter, Routes, Route} from "react-router-dom";

// pages

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";

// protected user pages:

import UserProfile from "./pages/user/UserProfilePage";
import UserOrders from "./pages/user/UserOrdersPage";
import UserCartDetails from "./pages/user/UserCartDetailsPage";
import UserOrderDetails from "./pages/user/UserOrderDetailsPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

// protected admin pages:

import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

// components

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// user components:
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                <Route element={<RoutesWithUserChatComponent/>}>
                    {/* publicly available routes: */}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/product-list" element={<ProductListPage/>}/>
                    <Route path="/product-details" element={<ProductDetailsPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/*" element="Page is not exist"/>
                </Route>

                {/* protected user pages: */}

                <Route element={<ProtectedRoutesComponent/>}>
                    <Route path="/user" element={<UserProfile/>}/>
                    <Route path="/user/my-orders" element={<UserOrders/>}/>
                    <Route path="/user/cart" element={<UserCartDetails/>}/>
                    <Route path="/user/order-details" element={<UserOrderDetails/>}/>
                </Route>

                {/* admin pages */}
                <Route element={<ProtectedRoutesComponent admin={true}/>}>
                    <Route path="/admin/users" element={<AdminUsersPage/>}/>
                    <Route path="/admin/edit-user" element={<AdminEditUserPage/>}/>
                    <Route path="/admin/products" element={<AdminProductsPage/>}/>
                    <Route path="/admin/order" element={<AdminOrderPage/>}/>
                    <Route path="/admin/order-details" element={<AdminOrderDetailsPage/>}/>
                    <Route path="/admin/create-new-product" element={<AdminCreateProductPage/>}/>
                    <Route path="/admin/edit-product" element={<AdminEditProductPage/>}/>
                    <Route path="/admin/chats" element={<AdminChatsPage/>}/>
                    <Route path="/admin/analytics" element={<AdminAnalyticsPage/>}/>
                </Route>
            </Routes>
            <FooterComponent/>
        </BrowserRouter>

    )
        ;
}

export default App;
