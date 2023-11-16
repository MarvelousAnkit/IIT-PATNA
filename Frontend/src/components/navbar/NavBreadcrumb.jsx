import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom';

const NavBreadcrumb = () => {
    const location = useLocation()
    let currentLocation = ``

    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLocation += `/${crumb}`
            return (
                <BreadcrumbItem>
                    <NavLink to={currentLocation}>{crumb}</NavLink>
                </BreadcrumbItem>);
        })
    return (
        <div>
            <Breadcrumb>
                {crumbs}
            </Breadcrumb>
        </div>
    );
}

export default NavBreadcrumb;
