import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, CircularProgress } from "@material-ui/core";
import useForm from "../../CustomHooks/useForm";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToDashboard } from "../../Routes/coordinators";

import { useStyles } from "./style";

export const CompanyForm = () => {
  const classes = useStyles();
  const { states, setters } = useContext(GlobalStateContext);

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
            label="Nome da Empresa"
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
            label="Área de atuação no mercado:"
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
            label="Crie sua senha de acesso a plataforma."
            variant="outlined"
            type="password"
            fullWidth
            className={classes.textField}
            name="password"
          />
        </div>
        <div>
          <TextField
            required
            value={form.colaboradores}
            onChange={handleInput}
            name="about"
            label="O que a sua empresa busca em seus futuros colaboradores?"
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
