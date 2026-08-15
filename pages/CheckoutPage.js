import { expect } from '@playwright/test';


export class CheckoutPage{


constructor(page){

this.page = page;


this.firstName =
page.locator('#billing_first_name');


this.lastName =
page.locator('#billing_last_name');


this.email =
page.locator('#billing_email');


this.phone =
page.locator('#billing_phone');


this.address =
page.locator('#billing_address_1');


this.city =
page.locator('#billing_city');


this.placeOrder =
page.getByRole('button',{
name:/Place order/i
});


this.error =
page.locator('.woocommerce-error');


}




async verifyPage(){

await expect(this.page)
.toHaveURL(/checkout/);

}



async fillValidInfo(){

await this.firstName.fill('John');

await this.lastName.fill('Tester');

await this.email.fill('test@gmail.com');

await this.address.fill('Dhaka');

await this.city.fill('Dhaka');

await this.phone.fill('01712345678');

}



async invalidPhone(){

await this.phone.fill('12345');

}



async invalidEmail(){

await this.email.fill('abc@');

}



async placeOrder(){

await this.placeOrder.click();

}



async verifyError(){

await expect(this.error)
.toBeVisible();

}


}