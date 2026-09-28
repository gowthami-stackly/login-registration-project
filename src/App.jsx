import { useState } from "react";
import "./App.css";

const teams = [
  "AI_AM_Engineer",
  "Backend_Developer",
  "Data_Analyst",
  "Devops_Engineer",
  "Frontend_Developer",
  "Testing",
  "UI_UX",
  "Architecture",
  "Fullstack_Developer",
];

function App() {
  const [page, setPage] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    team: "",
    password: "",
  });

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Please enter Email ID / Username and Password");
      return;
    }

    alert("Login successful!");
  };

  // REGISTRATION
  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.team ||
      !registerData.password
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Registration successful!");

    setRegisterData({
      username: "",
      email: "",
      team: "",
      password: "",
    });

    setPage("login");
  };

  return (
    <div className="page">

      {/* LOGIN PAGE */}
      {page === "login" && (
        <div className="login-card">

          <h2>Login</h2>

          <form onSubmit={handleLogin}>

            <label>Email ID / Username</label>

            <input
              type="text"
              placeholder="Enter email ID or username"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />

            <button type="submit">
              Login
            </button>

          </form>

          <p>
            Don't have an account?
            <span onClick={() => setPage("register")}>
              Register
            </span>
          </p>

        </div>
      )}

      {/* REGISTRATION PAGE */}
      {page === "register" && (
        <div className="login-card">

          <h2>Registration</h2>

          <form onSubmit={handleRegister}>

            <label>User Name</label>

            <input
              type="text"
              placeholder="Enter user name"
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  username: e.target.value,
                })
              }
            />

            <label>Email ID</label>

            <input
              type="email"
              placeholder="Enter email ID"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  email: e.target.value,
                })
              }
            />

            <label>Team</label>

            <select
              value={registerData.team}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  team: e.target.value,
                })
              }
            >
              <option value="">
                Select Team
              </option>

              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  password: e.target.value,
                })
              }
            />

            <button type="submit">
              Create Account
            </button>

          </form>

          <p>
            Already have an account?
            <span onClick={() => setPage("login")}>
              Login
            </span>
          </p>

        </div>
      )}

    </div>
  );
}

export default App;