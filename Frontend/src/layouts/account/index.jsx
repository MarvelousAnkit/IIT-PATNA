import React from "react";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";

import Widget from "components/widget/Widget";
import { FaUser } from "react-icons/fa";

import { accountRoutes } from "routes"

export default function AccountLayout(props) {
    const { ...rest } = props;
    const [open, setOpen] = React.useState(true);
    const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

    React.useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);



    document.documentElement.dir = "ltr";
    return (
        <div className="flex h-full w-full">
            
            <Sidebar routes={accountRoutes} open={open} onClose={() => setOpen(false)} />
            {/* Navbar & Main Content */}
            <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                {/* Main Content */}
                <main
                    className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
                >
                    {/* Routes */}
                    <div className="h-full">
                        <Navbar
                            onOpenSidenav={() => setOpen(true)}
                            logoText={""}
                            // brandText={currentRoute}
                            // secondary={getActiveNavbar(routes)}
                            {...rest}
                        />
                        <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                            {/* <Routes>

                <Route
                  path="/"
                  element={<Navigate to="/dashboard/default" replace />}
                />
              </Routes> */}
                            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                                <Widget
                                    icon={<FaUser className="h-7 w-7" />}
                                    subtitle={"Ashish Kumawat"}
                                    title={"B.Tech III year CSE"}
                                />
                                
                            </div>
                            <Outlet />
                        </div>
                        <div className="p-3">
                            {/* <Footer /> */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
