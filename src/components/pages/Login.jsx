import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginRequest } from "../../api/authApi"

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mensaje, setMensaje] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const data = await loginRequest(email, password)
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            navigate("/dashboard")
        } catch (error) {
            setMensaje(error.response?.data?.error || "Error al iniciar sesión")
        }
}

return (
    <div className="min-h-screen bg-[#0a1524] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
        
        <div className="text-center mb-10">
            <h1 className="text-5xl font-serif text-[#DFD0B8]">
                Placey<span className="italic text-[#C1440E]">.</span>
            </h1>
            <p className="text-gray-400 text-sm mt-2">Descubre lo que chihuahua tiene para ti</p>
        </div>

        <div className="bg-white/5 backdrop:blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 className="text-xl text-[#DFD0B8] mb-6">
            Iniciar sesión
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input type="email"
        placeholder="Correo"
    value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-white/10 text-[#DFD0B8] placeholder-gray-500
        outline-none border border-gray-700 focus:border-[#C1440E] trasition-all"
    />

    <input type="password"
        placeholder="Constraseña"
        value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full px-4 py-3 rounded-xl bg-white/10 text-[#DFD0B8] placeholder-gray-500
        outline-none border border-gray-700 focus:border-[#C1440E] trasition-all"
        />

        {mensaje && <p className="text-[#C1440E] text-sm">{mensaje}</p>}

    <button type="submit" className="w-full py-3 rounded-xl bg-[#C1440E] text-white font-medium
    hover:bg-[#a83a0c] transition-colors">
        Iniciar sesión
    </button>
    </form>
    </div>

        </div>
    </div>
)
}


    