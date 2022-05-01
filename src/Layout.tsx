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
          <li>
            <Link to="/local-body-scroll">LockBodySCroll</Link>
          </li>
          <li>
            <Link to="/previous">Previous</Link>
          </li>
          <li>
            <Link to="/on-click-outside">OnClickOutside</Link>
          </li>
          <li>
            <Link to="/hover">Hover</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/script">Script</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
