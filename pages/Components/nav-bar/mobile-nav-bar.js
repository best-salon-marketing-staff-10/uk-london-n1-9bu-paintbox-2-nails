import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonFullListOfOurServices from '/pages/Components/buttons/button-full-list-of-our-services.js';
import LogoNav from '/pages/Components/logo-nav/logo-nav';
import { menu } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';


export default function MobileNavBar() {
    return (
        <>
            <Head>

            </Head>
            <div className="nav-bar">
                <LogoNav />
                <div className="nav-bar-menu">
                    <Navbar bg="#FFFFFF" expand={false}>
                        <Container fluid>
                            <Navbar.Brand href="#"></Navbar.Brand>
                            <Navbar.Toggle aria-controls="offcanvasNavbar" />
                            <Navbar.Offcanvas
                                id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel"
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbarLabel">
                                        <Link href="/" legacyBehavior>
                                            <LogoNav />
                                        </Link>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <div className="nav-bar-main-category">
                                            <Link href={menu.linkToMainMenu1} className="nav-bar-link-main-menu">
                                                {menu.mainMenu1}
                                            </Link>
                                        </div>
                                        <div className="nav-bar-main-category">
                                            <Link href={menu.linkToMainMenu4} className="nav-bar-link-main-menu">
                                                {menu.mainMenu4}
                                            </Link>
                                            <div className="nav-bar-services-sub-category">
                                                <div className="nav-bar-services-sub-category-details">
                                                    <div className="services-list-1">
                                                        <Link href={serviceCategory.mobileLinkToServiceCategory1} className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory1}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="nav-bar-services-sub-category-details">
                                                    <div className="services-list-2">
                                                        <Link href={serviceCategory.mobileLinkToServiceCategory2} className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory2}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="nav-bar-services-sub-category-details">
                                                    <div className="services-list-3">
                                                        <Link href={serviceCategory.mobileLinkToServiceCategory3} className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory3}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="nav-bar-services-sub-category-details">
                                                    <div className="services-list-4">
                                                        <Link href={serviceCategory.mobileLinkToServiceCategory4} className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory4}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="nav-bar-services-sub-category-details">
                                                    <div className="services-list-5">
                                                        <Link href={serviceCategory.mobileLinkToServiceCategory5} className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory5}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="nav-bar-services-sub-category-details">
                                                    <div className="services-list-6">
                                                        <Link href={serviceCategory.mobileLinkToServiceCategory6} className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory6}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="nav-bar-services-sub-category-details">
                                                    <div className="services-list-7">
                                                        <Link href={serviceCategory.mobileLinkToServiceCategory7} className="nav-bar-link-service-category">
                                                            {serviceCategory.serviceCategory7}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav-bar-main-category">
                                            <Link href={menu.linkToMainMenu3} className="nav-bar-link-main-menu">
                                                {menu.mainMenu3}
                                            </Link>
                                        </div>
                                        <div className="nav-bar-main-category">
                                            <Link href={menu.linkToMainMenu2} className="nav-bar-link-main-menu">
                                                {menu.mainMenu2}
                                            </Link>
                                        </div>
                                        <div className="nav-bar-main-category">
                                            <Link href={menu.linkToMainMenu5} className="nav-bar-link-main-menu">
                                                {menu.mainMenu5}
                                            </Link>
                                        </div>
                                        <div className="button">
                                            <ButtonFullListOfOurServices />
                                        </div>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>
            </div>

            <style jsx>{`
                
            `}</style>
        </>
    )
}