import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import MovieDetailPage from "./pages/MovieDetailPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={Homepage} />
            <Route path=":id" Component={MovieDetailPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
