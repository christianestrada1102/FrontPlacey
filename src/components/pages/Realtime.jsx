import {useEffect, useState} from 'react'
import socket from "../../sockets/socket"

export default function Realtime() {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')

    useEffect(() => {
        socket.on('server-message', (data) => {
            setMessages((prev) => [...prev, data.message])
    })

    return () => {
        socket.off('server-message')
    }
}, [])

const sendMessage = () => {
    if (message.trim() === '') return 

    socket.emit('client-message', { message })
    setMessage('')
    }

    return (
        <div>
            <h1>Socket.IO Demo</h1>

            <input value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Escribe un mensaje' />

            <button onClick={sendMessage}>
                Enviar
            
            </button>

            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    )
}