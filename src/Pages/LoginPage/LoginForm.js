import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, CircularProgress } from "@material-ui/core";
import useForm from "../../CustomHooks/useForm";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToDashboard } from "../../Routes/coordinators";

import { useStyles } from "./style";

export const LoginForm = () => {
  const classes = useStyles();
  const { states, setters } = useContext(GlobalStateContext);

  //esperar API ficar pronta para nomear os inputs
  const [form, handleInput] = useForm({
    email: undefined,
    password: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    setters.setCompany(form);
    goToDashboard(history);
  };

  return (
    <section>
      <form className={classes.form} onSubmit={submitForm}>
        <div>
          <TextField
            required
            value={form.email}
            onChange={handleInput}
            name="email"
            label="E-mail"
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
            value={form.password}
            onChange={handleInput}
            name="password"
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            className={classes.textField}
          />
        </div>

        <div className={classes.divSubmit}>
          <Button type="submit" variant="contained" color="primary">
            {isLoading ? (
              <CircularProgress size={24} color={"inherit"} />
            ) : (
              "Entrar"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};
