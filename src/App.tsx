import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  Async,
  DarkMode,
  EventListener,
  LocalStorage,
  LockBodyScroll,
  Previous,
  Toggle,
  WhyDidYouUpdate
} from "./components";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Toggle />} />
        <Route path="async" element={<Async />} />
        <Route path="event-listener" element={<EventListener />} />
        <Route path="why-did-you-update" element={<WhyDidYouUpdate />} />
        <Route path="local-stroage" element={<LocalStorage />} />
        <Route path="dark-mode" element={<DarkMode />} />
        <Route path="local-body-scroll" element={<LockBodyScroll />} />
        <Route path="previous" element={<Previous />} />
      </Route>
    </Routes>
  );
}
