import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button, CircularProgress } from '@material-ui/core'
import useForm from '../../customHooks/useForm'
import { useHistory } from 'react-router-dom'

export const SignUpForm = () => {
    //esperar API ficar pronta para nomear os inputs
    const [form, handleInput] = useForm ({
        name: "",
        email: "",
        cpf: "",
        street: "",
        number: "",
        complement: "",
        city: "",
        state:""    
    })
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const submitForm = (e) => {
        e.preventDefault()

    }

    return (
        <section>
            <form>
                <div>
                    <TextField
                        required
                        autoFocus
                        value={form.name}
                        //   onChange={handleInput}
                        name="name"
                        label="Nome"
                        placeholder="Nome e sobrenome"
                        variant="outlined"
                        type="text"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.email}
                        //   onChange={handleInput}
                        name="email"
                        label="email"
                        placeholder="email@email.com."
                        variant="outlined"
                        type="email"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.cpf}
                        //   onChange={handleInput}
                        name="cpf"
                        label="CPF"
                        inputProps={{ pattern: "[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}" }}
                        placeholder="Rua/000.000.000-00"
                        variant="outlined"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.street}
                        //   onChange={handleInput}
                        name="street"
                        label="Rua/Av."
                        placeholder="Rua/Av."
                        variant="outlined"
                        type="text"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.number}
                        //   onChange={handleInput}
                        name="number"
                        label="Número"
                        placeholder="Número"
                        variant="outlined"
                        type="number"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.complement}
                        //   onChange={handleInput}
                        name="complement"
                        label="Complemento"
                        placeholder="Apt/Bloco"
                        variant="outlined"
                        type="text"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.neighbourhood}
                        //   onChange={handleInput}
                        name="neighbourhood"
                        label="Bairro"
                        placeholder="Bairro"
                        variant="outlined"
                        type="text"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.city}
                        //   onChange={handleInput}
                        name="city"
                        label="Cidade."
                        placeholder="Cidade"
                        variant="outlined"
                        type="text"
                />
                </div>
                <div>
                    <TextField
                        required
                        value={form.state}
                        //   onChange={handleInput}
                        name= "state"
                        label="Estado"
                        placeholder="Estado"
                        variant="outlined"
                        type="text"
                />
                </div>
               
                <Button 
                type = "submit"
                variant = "contained"
                color= "primary">
                {isLoading ? <CircularProgress size={24} color={"inherit"} /> : "Cadastrar"}
                </Button>
            </form>
        </section>


    )


}