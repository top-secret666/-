import { useState } from "react"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login:", { email, password })


    // const response = await fetch('https://your-api.com/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //
    // const data = await response.json()
    // localStorage.setItem('token', data.token)
    // localStorage.setItem('user', JSON.stringify(data.user))
    // navigate('/employees')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Вход в систему</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
