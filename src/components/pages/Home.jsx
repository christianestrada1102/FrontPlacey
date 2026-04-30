import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const categorias = ["Todo","Museos","Cafes","Arte urbano","Selfies"]
const vistas = ["Inicio","Comparte tu Place"]

export default function Home() {
    const navigate = useNavigate()
    const [cat_activa, setCatActiva] = useState("Todo")
    const [vistaActiva, setVistaActiva] = useState('Inicio')

    
    return (
        <div className="min-h-screen bg-[d6d2c7]">
            
            <nav className="bg-white border-b border-gray-200 px-4 py-1 flex items- center justify-between sticky top-0 z-10 ">
                <div className="flex items-end gap-3">
                    <span className="text-4xl font-serif leading-tight text-black">placey<span className="italic text-[#C1440E]">.</span></span>
                    <span className="text-[10px] text-gray-400 tracking-wider uppercase font-sans pb-1.5">Chihuahua</span>
                </div>
                <div className="relative flex items-center">
                <svg className="absolute left-3 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input type="text"
                placeholder="Buscar place.."
                className="w-96 pl-9 pr-4 py-1.5 text-sm bg-gray-100 rounded-full outline-none text-gray-800 placeholder-gray-400"
                />
                </div>
                <div className="flex items-center gap-2">
                {vistas.map(vista => (
                        <button
                        key={vista}
                        onClick={() => {
                            setVistaActiva(vista);
                            if (vista === "Comparte tu Place") {
                                navigate('/create');
                            }
                        }}
                        className={`text-sm px-4 py-1.5 rounded-2xl border transition-all whitespace-nowrap
                            ${vistaActiva === vista
                            ? 'bg-black text-white border-black'
                            : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                        {vista}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="px-6 py-3 flex items-center gap-2 border-b border-gray-200 bg-gray-50 overflow-x-auto">
            {categorias.map(cat => (
            <button
            key={cat}
            onClick={() => setCatActiva(cat)}
            className={`text-sm px-4 py-1.5 rounded-2xl border transition-all whitespace-nowrap ${cat_activa === cat
            ? "bg-black text-white border-black" : "border-gray-300 text-gray-600 hover:bg-gray-50"}`}
            >
            {cat}
            </button>
            ))}
            </div>

            <div className="px-6 py-12 max-w-5x1">
                <h1 className="text-6xl font-serif leading-thigh">
                    Descubre los lugares mas bonitos<br />
                    <span className="italic text-[#C1440E]">de Chihuahua</span>,<span> en</span> <br />Placey<span className="italic text-[#C1440E]">.</span>
                </h1>
                <p className="mt-6 text-gray-500 max-w-sm text-sm leading-relaxed">
                    Descubre lugares únicos del norte a través de fotos reales:
                    museos, cafés escondidos y murales llenos de historia. Guarda tus favoritos y comienza tu propia historia
                </p>
            </div>

            <div className="px-6 pb-12 columns-2 md_columns-3 lg:columns-4 gap-3">
                <img className='w-full rounded-lg mb-3 object-cover' src="/arche.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/go.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/hw.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/innato.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/museose.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/arche.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/go.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/hw.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/innato.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/museose.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/arche.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/go.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/hw.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/innato.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/museose.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/arche.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/go.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/hw.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/innato.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/museose.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/arche.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/go.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/hw.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/innato.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/museose.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/arche.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/go.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/hw.jpg" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/innato.png" alt="" />
                <img className='w-full rounded-lg mb-3 object-cover' src="/museose.jpg" alt="" />


            </div>

        </div>
    )
    
}