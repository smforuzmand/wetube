import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/home";
import Layout from "./screens/layout";
import PlaybackScreen from "./screens/playback";
import SearchScreen from "./screens/search";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="playback/:id" element={<PlaybackScreen />} />
          <Route path="search" element={<SearchScreen />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
