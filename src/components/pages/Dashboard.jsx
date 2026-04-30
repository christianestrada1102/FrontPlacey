import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    const logout = () => {
        <div>
            <h1>Dashboard</h1>

            <p>Bienvenido: {user.name}</p>
            <p>Emamil: {user.email}</p>

            <button onClick={logout}>
                Cerrar sesión
            </button>
        </div>
    }
}