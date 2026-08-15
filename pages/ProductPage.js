import { expect } from '@playwright/test';


export class ProductPage {

    constructor(page){

        this.page = page;


        this.productLink = page
            .getByRole('link',{
                name:'Anker Nano 45W GaN Charger with Display (A121D)',
                exact:true
            })
            .first();


        this.addToCartButton = page
            .locator('form.cart')
            .getByRole('button',{
                name:'Add to cart',
                exact:true
            });

    }



    async openWebsite(){

        await this.page.goto(
            'https://cbxshop.com/',
            {
                waitUntil:'domcontentloaded',
                timeout:60000
            }
        );

    }




    async selectProduct(){

        await expect(this.productLink)
            .toBeVisible({
                timeout:20000
            });


        await this.productLink.click();



        await expect(
            this.page.getByRole('heading',{
                name:'Anker Nano 45W GaN Charger with Display (A121D)',
                exact:true
            })
        )
        .toBeVisible({
            timeout:20000
        });

    }




    async addProductToCart(){

        await expect(this.addToCartButton)
            .toBeVisible({
                timeout:20000
            });


        await this.addToCartButton.click();


        await this.page.waitForTimeout(3000);

    }




    async openCart(){

        await this.page.goto(
            'https://cbxshop.com/cart/',
            {
                waitUntil:'domcontentloaded',
                timeout:60000
            }
        );

    }




    async openCheckout(){

        await this.page.goto(
            'https://cbxshop.com/checkout/',
            {
                waitUntil:'domcontentloaded',
                timeout:60000
            }
        );

    }


}