import { useState, useEffect } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

function Layout() {
    const [mainHeight, setMainHeight] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        setMainHeight(headerHeight + footerHeight);
    });

    return (
        <div>
            <HeaderComponent
                setHeaderHeight={setHeaderHeight}
            ></HeaderComponent>
            <main style={{ minHeight: `calc(100vh - ${mainHeight}px)` }}>
                <Outlet />
            </main>
            <FooterComponent
                setFooterHeight={setFooterHeight}
            ></FooterComponent>
        </div>
    );
}

export default Layout;
