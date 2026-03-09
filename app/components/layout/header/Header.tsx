'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoBagOutline, IoPersonOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Shop', href: '/shop' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Contact', href: '/contact' },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [drawerOpen]);

    const closeDrawer = () => setDrawerOpen(false);

    return (
        <>
            <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
                <div className="container header-inner">

                    <Link href="/" className="header-logo" onClick={closeDrawer}>
                        <img src="/logo.png" alt="Deep Pariwar" className="header-logo__img" />
                        <span className="header-logo__text">Pariwar</span>
                    </Link>

                    <nav className="header-nav">
                        <ul className="header-nav__list">
                            {navLinks.map((link) => (
                                <li key={link.href} className="header-nav__item">
                                    <Link
                                        href={link.href}
                                        className={`header-nav__link${pathname === link.href ? ' header-nav__link--active' : ''}`}
                                    >
                                        {link.label}
                                        <span className="header-nav__underline" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <Link href="/cart" className="header-icon" aria-label="Cart">
                            <IoBagOutline size={22} />
                            <span className="header-icon__badge">0</span>
                        </Link>

                        <Link href="/account" className="header-icon" aria-label="Account">
                            <IoPersonOutline size={22} />
                        </Link>

                        <button
                            className={`header-hamburger${drawerOpen ? ' header-hamburger--open' : ''}`}
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            aria-label="Toggle Menu"
                            aria-expanded={drawerOpen}
                        >
                            {drawerOpen
                                ? <IoCloseOutline size={26} />
                                : <IoMenuOutline size={26} />
                            }
                        </button>
                    </div>

                </div>
            </header>

            <div
                className={`drawer-overlay${drawerOpen ? ' drawer-overlay--visible' : ''}`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            <aside className={`drawer${drawerOpen ? ' drawer--open' : ''}`} aria-label="Mobile Navigation">
                <div className="drawer-header">
                    <Link href="/" className="drawer-logo" onClick={closeDrawer}>
                        <img src="/logo.png" alt="Deep Pariwar" className="drawer-logo__img" />
                        <span>Deep Pariwar</span>
                    </Link>
                    <button className="drawer-close" onClick={closeDrawer} aria-label="Close Menu">
                        <IoCloseOutline size={22} />
                    </button>
                </div>

                <nav className="drawer-nav">
                    <ul className="drawer-nav__list">
                        {navLinks.map((link, i) => (
                            <li
                                key={link.href}
                                className="drawer-nav__item"
                                style={{ '--delay': `${i * 0.06}s` } as React.CSSProperties}
                            >
                                <Link
                                    href={link.href}
                                    className={`drawer-nav__link${pathname === link.href ? ' drawer-nav__link--active' : ''}`}
                                    onClick={closeDrawer}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="drawer-footer">
                    <Link href="/cart" className="drawer-action-btn" onClick={closeDrawer}>
                        <IoBagOutline size={18} />
                        Cart
                    </Link>
                    <Link href="/account" className="drawer-action-btn" onClick={closeDrawer}>
                        <IoPersonOutline size={18} />
                        Account
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default Header;