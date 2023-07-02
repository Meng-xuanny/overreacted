import { useEffect, useState } from "react";
import data from "./data";
import Article from "./Article";

const getLocalTheme = () => {
  let defaultTheme = "light-theme";
  if (localStorage.getItem("theme"))
    defaultTheme = localStorage.getItem("theme");
  return defaultTheme;
};

function App() {
  const [theme, setTheme] = useState(getLocalTheme());

  const handleToggle = () => {
    if (theme === "light-theme") setTheme("dark-theme");
    else setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={handleToggle}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;
