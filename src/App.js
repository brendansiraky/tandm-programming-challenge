import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { withUnprotectedRoute } from './hocs/withUnprotectedRoute';
import { withProtectedRoute } from './hocs/withProtectedRoute';
import { Navigation } from './components/Navigation/Navigation';
import { DocumentsManagementPage } from './pages/DocumentsManagementPage';
import { DocumentsViewPage } from './pages/DocumentsViewPage';
import { Logo } from './components/shared/Logo/Logo';
import { DashboardPage } from './pages/DashboardPage';
import './styles/global.scss'

function App() {
	return (
		<div className="App">
			<Routes>

				{/* Unprotected Routes */}
				<Route path="/" 		element={<Navigate to="/register" replace />} />
				<Route path="/register" element={withUnprotectedRoute(RegisterPage)} />
				<Route path="/login" 	element={withUnprotectedRoute(LoginPage)} />

				{/* Protected Routes */}
				<Route path="/dashboard" element={withProtectedRoute(DashboardPage)} />
				{/* <Route path="/manage" element={withProtectedRoute(DocumentsManagementPage)} /> */}

			</Routes>
			{/* <Navigation /> */}
			<Logo />
			<ToastContainer
				hideProgressBar={false}
				autoClose={1500}
				position="top-right"
				
			/>
		</div>
	);
}

export default App;
