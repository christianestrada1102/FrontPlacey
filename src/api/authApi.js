import api from './axios'

export const loginRequest = async (email, password) => {
    const response = await api.post('/auth/login', { email, contraseña: password })
    return response.data
}

export const registerRequest = async (nombre,email,paswword) => {
    const response = await api.post('/auth/register', { nombre, email, contraseña: paswword })
    return response.data
}

export const getUsersRequest = async () => {
    const response = await api.get('/users')
    return response.data
}