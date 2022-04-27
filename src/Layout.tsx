import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Toggle</Link>
          </li>
          <li>
            <Link to="/async">Async</Link>
          </li>
          <li>
            <Link to="/event-listener">EventListener</Link>
          </li>
          <li>
            <Link to="/why-did-you-update">WhyDidYouUpdate</Link>
          </li>
          <li>
            <Link to="/local-stroage">LocalStorage</Link>
          </li>
          <li>
            <Link to="/dark-mode">DarkMode</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
