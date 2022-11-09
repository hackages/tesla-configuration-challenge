import "./tesla-style.scss";
import logo from "./assets/logo.svg";
import { TeslaBattery } from "./tesla-battery/TeslaBattery";

export const App = () => (
  <header class="header">
    <img src=logo alt="Tesla Logo" />
  </header>
  <div class="wrapper">
    <TeslaBattery />
  </div>
)
