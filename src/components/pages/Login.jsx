import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginRequest,registerRequest } from "../../api/authApi"

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [isLogin, setIsLogin] = useState(true)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password.trim().length < 8) {
            setMensaje("La contraseña debe tener al menos 8 caracteres")
            return
        }

        if (!isLogin && nombre.trim() === "") {
        setMensaje("El nombre es obligatorio")
        return
        }
        
        try {
        if (isLogin) {
            const data = await loginRequest(email, password)
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            navigate("/dashboard")
        } else {

            await registerRequest(nombre,email,password)
            setMensaje("Registro exitoso, ahora puedes iniciar sesión")
            setIsLogin(true)

            setNombre("")
            setEmail("")
            setPassword("")
        }
        } catch (error) {
            setMensaje(error.response?.data?.error || "Error al iniciar sesión")
        }
}

return (

    
    <div className="min-h-screen bg-[#0a1524] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
        
        <div className="text-center mb-10">
            <h1 className="text-5xl font-serif text-[#DFD0B8]">
            <span className={isLogin ? "text-[#C1440E]" : "text-[#DFD0B8]"}>
                Placey
            </span>
        <span className={`italic ${isLogin ? "text-[#DFD0B8]" : "text-[#C1440E]"}`}>
                .
            </span>
            </h1>
            <p className="text-gray-400 text-sm mt-2">Descubre lo que chihuahua tiene para ti</p>
        </div>

        <div className="bg-white/5 backdrop:blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
        <h1 className="text-xl text-[#DFD0B8] mb-6">
            {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {!isLogin && (
            <input type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-[#DFD0B8] placeholder-gray-500
                    outline-none border border-gray-700 focus:border-[#C1440E] trasition-all"
                />
        )}

    <input type="email"
        placeholder="Correo electrónico"
    value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 rounded-xl bg-white/10 text-[#DFD0B8] placeholder-gray-500
        outline-none border border-gray-700 focus:border-[#C1440E] trasition-all"
    />

    <input type="password"
        placeholder="Constraseña"
        value={password}
    onChange={(e) => {
        setPassword(e.target.value)
        setMensaje("")
    }}
        className="w-full px-4 py-3 rounded-xl bg-white/10 text-[#DFD0B8] placeholder-gray-500
            outline-none border border-gray-700 focus:border-[#C1440E] trasition-all"
        />

        {mensaje && <p className="text-[#C1440E] text-sm">{mensaje}</p>}

    <button type="submit" className={`w-full py-3 rounded-xl font-medium transition-colors 
    ${isLogin 
    ? "bg-[#DFD0B8] text-black hover:opacity-90"
    : "bg-[#C1440E] text-white hover:bg-[#a83a0c]"}`}
        >
        {isLogin ? "Iniciar sesión" : "Crear cuenta"}
    </button>
    </form>
        <p className="text-center text-sm text-gray-400 mt-4">
            {isLogin ? "No tienes una cuenta?" : "Ya tienes una cuenta?"}{" "}
            <span onClick={() => setIsLogin(!isLogin)}
            className="text-[#DFD0B8] cursor-pointer font-medium"
            >
            <span className="">
            {isLogin ? "Crear cuenta" : "Iniciar sesión"}
            </span>
            </span>
        </p>

    </div>

        </div>
    </div>
)
}


    