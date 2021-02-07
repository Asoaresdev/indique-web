import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, CircularProgress } from "@material-ui/core";
import useForm from "../../CustomHooks/useForm";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToDashboard } from "../../Routes/coordinators";

import { useStyles } from "./style";

export const MentorForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);

  //esperar API ficar pronta para nomear os inputs
  const [form, handleInput] = useForm({
    name: undefined,
    email: undefined,
    area: undefined,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setters.setMentor(form);
    goToDashboard(history);
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
            label="Nome do Indicador:"
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
            type="area"
            label="Qual sua área de atuação?"
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            value={form.password}
            onChange={handleInput}
            name="password"
            type="password"
            label="Crie sua senha de acesso para a plataforma"
            variant="outlined"
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
