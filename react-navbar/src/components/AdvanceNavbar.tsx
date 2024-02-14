import React, { useState } from "react";
import MenuData from "./MenuData";
import "./AdvanceNavbar.css";
function AdvanceNavbar() {
  const [clicked, setClicked] = useState(false);
  const reqFunction = (items: any, index: any) => {
    return (
      <ul>
        {items?.map((child: any, indexChild: number) => {
          return (
            <li key={index + indexChild}>
              <a href={child.url} className={child.cName}>
                <i className={child.icon} />
                {child.title}
              </a>
              {reqFunction(child.children, indexChild)}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        React <i className="fb fa-react"></i>
      </h1>
      <div className="menu-icons">
        <i
          className={clicked ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icon} />
                {item.title}
              </a>
              {reqFunction(item.children, index)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default AdvanceNavbar;
