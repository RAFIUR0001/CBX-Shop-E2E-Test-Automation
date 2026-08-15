import { test, expect } from '@playwright/test';


import { ProductPage } from '../pages/ProductPage.js';

import { CartPage } from '../pages/CartPage.js';

import { CheckoutPage } from '../pages/CheckoutPage.js';



test.setTimeout(120000);





// TC_005 - Verify product name in cart

test('TC_005 - Verify product name in cart', async ({ page }) => {


    const product = new ProductPage(page);

    const cart = new CartPage(page);



    await product.openWebsite();

    await product.selectProduct();

    await product.addProductToCart();

    await product.openCart();



    await cart.verifyCart();

    await cart.verifyProduct();

    await cart.verifyProductName();


});







// TC_007 - Verify cart quantity after single product add

test('TC_007 - Verify cart quantity after single product add', async ({ page }) => {


    const product = new ProductPage(page);

    const cart = new CartPage(page);



    await product.openWebsite();

    await product.selectProduct();

    await product.addProductToCart();

    await product.openCart();



    await cart.verifyQuantity(1);


});







// TC_008 - Verify removing product from cart

test('TC_008 - Verify removing product from cart', async ({ page }) => {


    const product = new ProductPage(page);

    const cart = new CartPage(page);



    await product.openWebsite();

    await product.selectProduct();

    await product.addProductToCart();

    await product.openCart();



    await cart.removeProduct();


});








// TC_018 - Verify invalid phone checkout

test('TC_018 - Verify invalid phone checkout', async ({ page }) => {


    const product = new ProductPage(page);

    const checkout = new CheckoutPage(page);



    await product.openWebsite();

    await product.selectProduct();

    await product.addProductToCart();

    await product.openCheckout();



    await checkout.verifyPage();


    await checkout.fillValidInfo();


    await checkout.invalidPhone();


    await checkout.placeOrder();



    await checkout.verifyError();



});









// TC_NF_005 - Verify checkout data validation reliability

test('TC_NF_005 - Verify checkout data validation reliability', async ({ page }) => {


    const product = new ProductPage(page);

    const checkout = new CheckoutPage(page);



    // Open website

    await product.openWebsite();



    // Select product

    await product.selectProduct();



    // Add product to cart

    await product.addProductToCart();



    // Open checkout

    await product.openCheckout();



    // Verify checkout page

    await checkout.verifyPage();



    // Fill valid checkout information

    await checkout.fillValidInfo();



    // Enter invalid checkout data

    await checkout.invalidPhone();



    // Submit order

    await checkout.placeOrder();



    // Expected:
    // System should show validation message
    //
    // Actual:
    // CBXShop accepts invalid data
    // Therefore this test should FAIL


    await expect(
        page.locator('.woocommerce-error')
    ).toBeVisible({
        timeout:10000
    });



});