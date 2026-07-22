"use client";
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
    const { totalItems } = useCart();

    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: 'var(--max-width)',
            padding: '1rem 2rem',
            borderRadius: '20px',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div className="logo" style={{ fontWeight: '800', fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
                <Link href="/">
                    RG<span style={{ color: 'var(--primary)' }}>medios</span>
                </Link>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '0.9rem', opacity: 0.8 }}>Home</Link>
                <Link href="/catalog" style={{ fontSize: '0.9rem', opacity: 0.8 }}>Catalog</Link>
                <Link href="#" style={{ fontSize: '0.9rem', opacity: 0.8 }}>About</Link>

                <div style={{
                    background: 'var(--primary)',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '99px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span>Cart</span>
                    <span style={{
                        background: 'white',
                        color: 'var(--primary)',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: '800'
                    }}>
                        {totalItems}
                    </span>
                </div>
            </div>
        </nav>
    );
}
