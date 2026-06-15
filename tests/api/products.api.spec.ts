import { test, expect } from '@playwright/test';

test('returns a list of products', async ({ request }) => {
    const response = await request.get('https://fakestoreapi.com/products');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const products = await response.json();

    expect(Array.isArray(products)).toBeTruthy();
    expect(products.length).toBeGreaterThan(0);

    expect(products[0]).toMatchObject({
        id: expect.any(Number),
        title: expect.any(String),
        price: expect.any(Number),
    });
});

test('returns expected details for a specific product', async ({ request }) => {
    const response = await request.get('https://fakestoreapi.com/products/1');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const product = await response.json();

    expect(Array.isArray(product)).toBeFalsy();

    expect(product).toMatchObject({
        id: 1,
        title: expect.any(String),
        price: expect.any(Number),
        description: expect.any(String),
        category: expect.any(String),
        image: expect.any(String),
    });
});

test('handles requests for a nonexistent product', async ({ request }) => {
    const response = await request.get('https://fakestoreapi.com/products/999999');

    expect(response.status()).toBe(200);

    const responseBody = await response.text();

    expect(responseBody).toBe('');
});