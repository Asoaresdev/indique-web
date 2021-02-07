import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import useForm from "../../CustomHooks/useForm";
import { useHistory } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function SignUpForm() {
  //esperar API ficar pronta para nomear os inputs
  const [form, handleInput] = useForm({
    name: "",
    email: "",
    cpf: "",
    tel: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSenha, setShowSenha] = React.useState(false);
  const history = useHistory();

  const handleClickShowPassword = () => {
    setShowSenha(!showSenha);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

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
            value={form.tel}
            //   onChange={handleInput}
            name="tel"
            label="Telefone contato"
            inputProps={{ pattern: "[0-9]{2}-?[0-9]{4}-?[0-9]{4}" }}
            placeholder="00-0000-0000"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Sobre você"
            multiline
            rowsMax={4}
            placeholder="Fale um pouco sobre você"
            value={form.description}
            //   onChange={handleChange}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            value={form.password || undefined}
            onChange={handleInput}
            inputProps={{ pattern: "(.){6,}" }}
            name="password"
            id="outlined-disabled"
            label="Senha"
            placeholder="Mínimo de 6 caracteres"
            variant="outlined"
            type={showSenha ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showSenha ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          {isLoading ? (
            <CircularProgress size={24} color={"inherit"} />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </form>
    </section>
  );
}
