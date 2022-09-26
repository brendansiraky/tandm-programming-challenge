import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { withUnprotectedRoute } from './hocs/withUnprotectedRoute'
import { withProtectedRoute } from './hocs/withProtectedRoute'
import { DashboardPage } from './pages/DashboardPage'
import { Logo } from './components/shared/Logo/Logo'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
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
