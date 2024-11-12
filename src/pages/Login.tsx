import React, { useState } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Для перехода на другие страницы

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Для отображения ошибок

  const navigate = useNavigate(); // Для навигации после успешной авторизации

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Базовая валидация
    if (!username || !password) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    // Имитация успешного логина
    if (username === "admin" && password === "password") {
      setError(null);
      navigate("/dashboard"); // Перенаправление на страницу после логина
    } else {
      setError("Неверные данные для входа.");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Typography variant="h5">Войти в систему</Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 1 }}>
          <TextField
            label="Имя пользователя"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography
              color="error"
              variant="body2"
              align="center"
              sx={{ marginTop: 1 }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Войти
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
