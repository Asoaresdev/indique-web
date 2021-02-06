import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, CircularProgress } from "@material-ui/core";
import useForm from "../../CustomHooks/useForm";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../Global/GlobalStateContext";

import { useStyles } from "./style";

export const ExperienceForm = () => {
  const classes = useStyles();
  const { states, setters } = useContext(GlobalStateContext);
  console.log(states);

  //esperar API ficar pronta para nomear os inputs
  const [form, handleInput] = useForm({
    escolaridade: undefined,
    instituicao: undefined,
    curso: undefined,
    area: undefined,
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    setters.setCandidato({
      ...states.candidato,
      ...form,
    });
  };

  return (
    <section>
      <form className={classes.form} onSubmit={submitForm}>
        <div>
          <TextField
            required
            autoFocus
            value={form.escolaridade}
            onChange={handleInput}
            name="escolaridade"
            label="Qual seu grau de escolaridade?"
            variant="outlined"
            type="text"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            value={form.instituicao}
            onChange={handleInput}
            name="instituicao"
            label="Instituição"
            placeholder="Onde você estudou?"
            variant="outlined"
            type="text"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div>
          <TextField
            required
            value={form.curso}
            onChange={handleInput}
            name="curso"
            label="Possui algum curso profissionalizante? Se sim, qual?"
            variant="outlined"
            fullWidth
            className={classes.textField}
          />

          <TextField
            required
            value={form.area}
            onChange={handleInput}
            name="area"
            label="Tem vontade de se profissionalizar em alguma área? Qual?"
            variant="outlined"
            type="text"
            fullWidth
            className={classes.textField}
          />
        </div>
        <div className={classes.divSubmit}>
          <Button type="submit" variant="contained" color="primary">
            {isLoading ? (
              <CircularProgress size={24} color={"inherit"} />
            ) : (
              "Pronto!"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
};
