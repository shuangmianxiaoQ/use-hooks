import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import {
  Async,
  DarkMode,
  EventListener,
  History,
  Hover,
  KeyPress,
  LocalStorage,
  LockBodyScroll,
  OnClickOutside,
  Previous,
  Script,
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
        <Route path="hover" element={<Hover />} />
        <Route path="why-did-you-update" element={<WhyDidYouUpdate />} />
        <Route path="local-stroage" element={<LocalStorage />} />
        <Route path="dark-mode" element={<DarkMode />} />
        <Route path="local-body-scroll" element={<LockBodyScroll />} />
        <Route path="previous" element={<Previous />} />
        <Route path="on-click-outside" element={<OnClickOutside />} />
        <Route path="history" element={<History />} />
        <Route path="script" element={<Script />} />
        <Route path="key-press" element={<KeyPress />} />
      </Route>
    </Routes>
  );
}
