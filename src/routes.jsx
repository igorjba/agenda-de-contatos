import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import useGlobalContext from './hooks/useGlobalContext';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function ProtectedRoute({ redirectTo }) {
    const { token } = useGlobalContext();

    return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<ProtectedRoute redirectTo="/" />}>
                <Route path="/main" element={<Main />} />
            </Route>
        </Routes>
    );
}

export default MainRoutes;