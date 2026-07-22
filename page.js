"use client";
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetail() {
    const { id } = useParams();
    const router = useRouter();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="container" style={{ paddingTop: '150px' }}>Product not found</div>;
    }

    return (
        <main className="container" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '80vh' }}>
            <button onClick={() => router.back()} style={{
                background: 'none',
                border: 'none',
                color: '#888',
                cursor: 'pointer',
                marginBottom: '2rem',
                fontSize: '0.9rem'
            }}>
                ← Back to Catalog
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div className="glass" style={{
                    height: '400px',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.02)'
                }}>
                    <div style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.1)' }}>RG</div>
                </div>

                <div>
                    <span style={{ color: 'var(--primary)', fontWeight: '600', letterSpacing: '0.05em' }}>{product.category.toUpperCase()}</span>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1rem', marginTop: '0.5rem' }}>{product.name}</h1>
                    <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                        {product.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: '700' }}>${product.price}</span>
                        <span style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.9rem' }}>In Stock</span>
                    </div>

                    <button onClick={() => addToCart(product)} style={{
                        background: 'var(--foreground)',
                        color: 'var(--background)',
                        border: 'none',
                        padding: '1rem 3rem',
                        borderRadius: '99px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'opacity 0.2s'
                    }}
                        onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </main>
    );
}
