import { useLocation } from "react-router-dom";

import { useContext } from "react";
const footerRoutes = ["/home"];

export default function Footer() {
  //   let theme = useContext(ThemeContext)
  //   const location = useLocation();
  //   const shouldShowFooter = footerRoutes.some(route => location.pathname.startsWith(route)) && location.pathname !== '/';

  //   if (!shouldShowFooter) {
  //     return null;
  //   }
  return (
    <footer className=" mt-24 py-10 md:py-20 text-d-text bg-d-secondary">
      <div className="w-screen px-52">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="/error" className="mx-4 hover:text-d-accent">
              Instagram
            </a>
            <a href="/error" className=" hover:text-d-accent mx-4">
              Twitter
            </a>
            <a href="/error" className=" hover:text-d-accent mx-4">
              LC095
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <a href="/" className=" font-bold text-3xl">
              <div className="my-auto text-d-accent text-4xl font-bold prompt">
                LIBELLUS
              </div>
            </a>
            <p className="my-4">
              Created by
              <span className="ml-2 text-d-text font-bold">
                Alden, Albert, Ervan, Jose, Michael
              </span>
            </p>
            <p className="text-base">
              Copyright ©️ 2023 Libellus Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
