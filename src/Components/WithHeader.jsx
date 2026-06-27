import Header from "./Header";
import { Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

export default function WithHeader() {
  return (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}
