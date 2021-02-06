import React from 'react'


//controlar inputs 
const useForm = (initialState) => {
    const [form, setForm] = React.useState(initialState)

    const handleInputChange = (event) => {
        const { value, name } = event.targe
        setForm ({ ...form, [name]: value })
    }

    const resetState = () => {
        setForm(initialState)
    }

    const handleFormErrors = (errors) => {
        setForm ({ ...form, errors })
    }

    return [form, handleInputChange, resetState, handleFormErrors]
}

export default useForm