import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    document.title = "OAGROUP — وكالة تسويق رقمي | مصر والسعودية";
  }, []);

  return (
    <>
      <Toaster position="top-center" theme="dark" />
      <RouterProvider router={router} />
    </>
  );
}
