import { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes('@')) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Senha deve ter pelo menos 6 caracteres');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    if (!email.includes('@')) {
      setEmailError('Email inválido');
    }
    if (password.length < 6) {
      setPasswordError('Senha deve ter pelo menos 6 caracteres');
    }
    if (emailError || passwordError) {
      return;
    }

    // Lógica para fazer login aqui
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box width="50%">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError || "Insira seu email"}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Senha"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError || "Insira sua senha"}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
