import "./App.css";
import { MovieProvider } from "./contexts/MovieProvider";
import { Body } from "./components/Body/Body";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import LABEL from "./constants/Labels";
import { PageButton } from "./components/Pagination/PaginationStyles";

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/movie-search/" element={<Navigate to="/movies/1" />} />
        <Route path="/movies/:page?" element={<Body />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route
          path="*"
          element={
            <>
              <div>{LABEL.NOT_FOUND}</div>
              <br />{" "}
              <Link to="/movies/1">
                <PageButton>Home</PageButton>
              </Link>
            </>
          }
        />
      </Routes>
    </MovieProvider>
  );
}

export default App;
