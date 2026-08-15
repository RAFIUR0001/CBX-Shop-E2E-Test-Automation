import { expect } from '@playwright/test';


export class CartPage {


constructor(page){

    this.page = page;



    this.productRow =
        page.locator(
            '.woocommerce-cart-form__cart-item'
        )
        .filter({
            hasText:'Anker Nano 45W GaN Charger'
        });



    this.productName =
        this.productRow.getByRole('link')
        .first();



    this.quantityInput =
        this.productRow.locator(
            'input[type="number"]'
        );



    this.removeButton =
        this.productRow.locator(
            '.remove'
        );



    this.updateButton =
        page.getByRole('button',{
            name:/Update cart/i
        });



    this.subtotal =
        page.locator(
            '.cart-subtotal .woocommerce-Price-amount'
        );

}




async verifyCart(){

    await expect(this.page)
    .toHaveURL(/cart/);

}



async verifyProduct(){

    await expect(this.productRow)
    .toHaveCount(1);

}



async verifyProductName(){

    await expect(this.productName)
    .toBeVisible();

}



async verifyQuantity(value){

    await expect(this.quantityInput)
    .toHaveValue(
        String(value)
    );

}



async removeProduct(){

    await this.removeButton.click();

}



async updateQuantity(value){

    await this.quantityInput.fill(
        String(value)
    );


    await this.updateButton.click();

}



async verifySubtotal(){

    await expect(this.subtotal)
    .toBeVisible();

}



}