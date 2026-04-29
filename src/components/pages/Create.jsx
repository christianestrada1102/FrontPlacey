import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Create() {
    
    const navigate = useNavigate()
    const [form,setForm] = useState({
        nombre: "",
        descripcion: "",
        direccion: "",
        id_cat: "",
        foto: null
    })

    const handleChange = (e) => {
        setForm ({...form, [e.target.name]: e.target.value})
    }

    const handleFoto = (e) => {
        setForm ({...form, foto: e.target.files[0]})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!form.foto) { 
            alert("la imagen es obligatoria")
            return 
        }

        const data = new FormData() 

            data.append("imagePlace", form.foto)
            data.append ("id_user", 1)
            data.append( "id_cat", form.id_cat)
            data.append ("name_place", form.nombre)
            data.append ("description", form.descripcion)
            data.append ("address", form.direccion)
        

        try {
            const res = await fetch ("http://localhost:3014/placeys", {
                method: "POST",
                body: data
            })

            const result = await res.json()
            console.log(result)
            navigate("/")
        } catch (error) {
            console.error("Error al crear el place:", error)
        }
        
    }

    return (
        <div className="min-h-screen bg-[#0a1524]">
        
        <nav className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
        <span className="text-4xl  text-black font-serif">Placey<span className="italic text-[#C1440E]">.</span></span>
        <button  onClick={() => navigate ("/")} className="text-sm  text-black px-4 py-1.5 rounded-2xl border border-gray-300-text-gray-600 hover:bg-gray-50">
            Volver
        </button>
        </nav>

        <div className="max-w-lg mx-auto px-6 py-12">
            <h1 className="text-3xl font-serif text-[#DFD0B8]">Comparte tu place</h1>
            <p className="text-sm text-gray-400 mb-8">Muestrale a chihuahua tu lugar favorito </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="w-full h-48 rounde-2xl border-2 border-dashed border-gray-600
                flex items-center justify-center cursor-pointer hover:border-[#C1440E] transition-all">

                <input type="file" accept="image/*" onChange={handleFoto} className="hidden" id="foto" />
                <label htmlFor="foto" className="text-gray-400 text-sm cursor-pointer">
                    {form.foto ? form.foto.name : "Sube una foto de tu place"}
                </label>
                </div>

                <input type="text"
                name="nombre"
                placeholder="Nombre del place"
                value={form.nombre} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-[#DFD0B8] placeholder:text-gray-500
                outline-none border border-gray-700 focus:border-[#C1440E]" />

                <textarea name="descripcion" placeholder="¿Que es lo que hace especial este lugar?"
                value={form.descripcion} onChange={handleChange} rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-[#DFD0B8] placeholder-gray-500
                 outline-none border border-gray-700 focus:border-[#C1440E] resize-none">
                </textarea>

                <input type="text"
                name="direccion"
                placeholder="Ingresa la direccion"
                value={form.direccion}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-[#DFD0B8]
                 placeholder-gray-500 outline-none border border-gray-700 focus:border-[#C1440E]" />

                 <select name="id_cat" 
                 value={form.id_cat}
                 onChange={handleChange}
                 className="w-full px-4 py-3 rounded-xl bg-[#0a1524] text-[#DFD0B8] outline-none border border-gray-700 focus:border-[#C1440E] ">
                    <option value="">Selecciona categoria</option>
                    <option value="1">Cafe</option>
                    <option value="2">Mural</option>
                    <option value="3">Arte urbano</option>
                    <option value="4">Selfie</option>
                    <option value="5">Restaurante</option>
                 </select>

                 <button type="submit" className="w-full py-3 rounded-xl bg-[#C1440E] text-white font-medium hover:bg-[#a33a0c] transition-all ">
                    Pulicar place
                 </button>

            </form>
        </div>

        </div>

    )
}