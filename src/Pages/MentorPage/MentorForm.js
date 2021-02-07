

import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, CircularProgress } from "@material-ui/core";
import useForm from "../../CustomHooks/useForm";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";

import { useStyles } from "./style";

export const MentorForm = () => {
  const classes = useStyles();
  const { states, setters } = useContext(GlobalStateContext);
  console.log(states);

  //esperar API ficar pronta para nomear os inputs
  const [form, handleInput] = useForm({
    name: undefined,
    email: undefined,
    area: undefined,
    colaboradores: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    setters.setCompany(form);
  };

  return (
    <section>
      <form className={classes.form} onSubmit={submitForm}>
        <div>
          <TextField
            required
            autoFocus
            value={form.name}
            onChange={handleInput}
            name="name"
            label="Nome do Indicador"
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
            onChange={handleInput}
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
            value={form.area}
            onChange={handleInput}
            name="area"
            type="text"
            label="Nível de aproximação"
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            value={form.colaboradores}
            onChange={handleInput}
            name="about"
            label="Quais suas referências sobre o candidato?"
            variant="outlined"
            type="text"
            multiline
            rows={5}
            fullWidth
            className={classes.textField}
            name="colaboradores"
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