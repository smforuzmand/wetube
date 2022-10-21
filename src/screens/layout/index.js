import React, { useState } from "react";
import {
  createSearchParams,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import "./index.scss";
import LogoIcon from "../../assets/logo.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Side from "./side";

const Layout = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: createSearchParams({ q: query }).toString(),
    });
  };

  return (
    <div className="layout">
      <div className="layout-top">
        <div className="row">
          <Link to={"/"}>
            <img src={LogoIcon} alt="logo" className="logo" />
          </Link>

          <form onSubmit={onSearch}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="search-bar"
              placeholder="Search"
            />
            <button type="submit" className="search-btn">
              <img src={SearchIcon} alt="search" />
            </button>
          </form>
        </div>
      </div>
      <div className="layout-wrapper">
        <div className="side">
          <Side />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
