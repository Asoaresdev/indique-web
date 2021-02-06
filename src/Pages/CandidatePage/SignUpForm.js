import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, CircularProgress } from "@material-ui/core";
import useForm from "../../CustomHooks/useForm";
import { useHistory } from "react-router-dom";

import { useStyles } from "./style";

export const SignUpForm = () => {
  const classes = useStyles();
  //esperar API ficar pronta para nomear os inputs
  const [form, handleInput] = useForm({
    name: "",
    email: "",
    phone: "",
    about: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form className={classes.form}>
        <div>
          <TextField
            required
            autoFocus
            value={form.name}
            //   onChange={handleInput}
            name="name"
            label="Nome completo"
            variant="outlined"
            type="text"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            value={form.email}
            //   onChange={handleInput}
            name="email"
            label="Email"
            placeholder="email@email.com."
            variant="outlined"
            type="email"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            value={form.phone}
            //   onChange={handleInput}
            name="phone"
            label="Qual o seu melhor telefone para contato?"
            inputProps={{ pattern: "[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}" }}
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            value={form.about}
            //   onChange={handleInput}
            name="street"
            label="Fale um pouco sobre você? O que você está buscando para sua próxima experiência profissional?"
            variant="outlined"
            type="text"
            multiline
            rows={5}
            fullWidth
            className={classes.textField}
          />
        </div>
        <div className={classes.divSubmit}>
          <Button type="submit" variant="contained" color="primary">
            {isLoading ? (
              <CircularProgress size={24} color={"inherit"} />
            ) : (
              "Enviar"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};
