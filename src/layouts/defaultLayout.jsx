import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useLoadingFunction } from "../contexts/LoadingContext";
import Loading from "../components/Loading";

export default function DefaultLayout() {
  const { isLoading } = useLoadingFunction();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {isLoading && <Loading />}
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
