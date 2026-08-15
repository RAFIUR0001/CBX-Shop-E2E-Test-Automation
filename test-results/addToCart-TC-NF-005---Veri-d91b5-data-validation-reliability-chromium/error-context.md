# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addToCart.spec.js >> TC_NF_005 - Verify checkout data validation reliability
- Location: tests\addToCart.spec.js:169:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('#billing_last_name')
    - waiting for "https://cbxshop.com/checkout/order-received/11725/?key=wc_order_UhlNBYGMukxav" navigation to finish...
    - navigated to "https://cbxshop.com/checkout/order-received/11725/?key=wc_order_UhlNBYGMukxav"

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - generic [ref=f3e2]:
    - link "Skip to navigation" [ref=f3e3] [cursor=pointer]:
      - /url: "#menu-categories"
    - link "Skip to main content" [ref=f3e4] [cursor=pointer]:
      - /url: "#main-content"
  - generic [ref=f3e5]:
    - banner [ref=f3e6]:
      - generic [ref=f3e7]:
        - text:      
        - generic [ref=f3e10]:
          - navigation "Main navigation" [ref=f3e12]:
            - list [ref=f3e13]:
              - listitem [ref=f3e14]:
                - link "Gadget & Accessories " [ref=f3e15] [cursor=pointer]:
                  - /url: https://cbxshop.com/product-category/gadget-accessories/
                  - generic [ref=f3e16]: Gadget & Accessories
                  - text: 
              - listitem [ref=f3e17]:
                - link "Home Appliance " [ref=f3e18] [cursor=pointer]:
                  - /url: https://cbxshop.com/product-category/home-appliance/
                  - generic [ref=f3e19]: Home Appliance
                  - text: 
              - listitem [ref=f3e20]:
                - link "Hardware Tools " [ref=f3e21] [cursor=pointer]:
                  - /url: https://cbxshop.com/product-category/hardware-tools/
                  - generic [ref=f3e22]: Hardware Tools
                  - text: 
              - listitem [ref=f3e23]:
                - link "Ladies Item " [ref=f3e24] [cursor=pointer]:
                  - /url: https://cbxshop.com/product-category/ladies-item/
                  - generic [ref=f3e25]: Ladies Item
                  - text: 
              - listitem [ref=f3e26]:
                - link "Gents Item " [ref=f3e27] [cursor=pointer]:
                  - /url: https://cbxshop.com/product-category/gents-item/
                  - generic [ref=f3e28]: Gents Item
                  - text: 
              - listitem [ref=f3e29]:
                - link "Kids Item " [ref=f3e30] [cursor=pointer]:
                  - /url: https://cbxshop.com/product-category/kids-item/
                  - generic [ref=f3e31]: Kids Item
                  - text: 
          - text:  
    - generic [ref=f3e32]:
      - list [ref=f3e36]:
        - listitem [ref=f3e37]:
          - link "Shopping cart" [ref=f3e38] [cursor=pointer]:
            - /url: https://cbxshop.com/cart/
          - text: 
        - listitem [ref=f3e39]:
          - link "Checkout" [ref=f3e40] [cursor=pointer]:
            - /url: https://cbxshop.com/checkout/
          - text: 
        - listitem [ref=f3e41]:
          - generic [ref=f3e42]: Order complete
      - main [ref=f3e43]:
        - article [ref=f3e45]:
          - generic [ref=f3e47]:
            - paragraph [ref=f3e48]: Thank you. Your order has been received.
            - list [ref=f3e49]:
              - listitem [ref=f3e50]:
                - generic [ref=f3e51]: "Order number:"
                - strong [ref=f3e52]: "11725"
              - listitem [ref=f3e53]:
                - generic [ref=f3e54]: "Date:"
                - strong [ref=f3e55]: August 14, 2026
              - listitem [ref=f3e56]:
                - generic [ref=f3e57]: "Total:"
                - strong [ref=f3e58]:
                  - generic [ref=f3e59]: 2,610.00৳
              - listitem [ref=f3e61]:
                - generic [ref=f3e62]: "Payment method:"
                - strong [ref=f3e63]: Cash on delivery
            - paragraph [ref=f3e64]: Pay with cash upon delivery.
            - generic [ref=f3e65]:
              - heading "Order details" [level=2] [ref=f3e66]
              - table [ref=f3e68]:
                - rowgroup [ref=f3e69]:
                  - row [ref=f3e70]:
                    - columnheader "Product" [ref=f3e71]
                    - columnheader "Total" [ref=f3e72]
                - rowgroup [ref=f3e73]:
                  - row [ref=f3e74]:
                    - cell [ref=f3e75]:
                      - link "Anker Nano 45W GaN Charger with Display (A121D)" [ref=f3e76] [cursor=pointer]:
                        - /url: https://cbxshop.com/product/anker-nano-45w-gan-charger-with-display-a121d/
                      - strong [ref=f3e77]: × 1
                    - cell "2,550.00৳" [ref=f3e78]
                - rowgroup [ref=f3e81]:
                  - row [ref=f3e82]:
                    - rowheader "Subtotal:" [ref=f3e83]
                    - cell "2,550.00৳" [ref=f3e84]
                  - row [ref=f3e86]:
                    - rowheader "Shipping:" [ref=f3e87]
                    - cell "60.00৳ via inside dhaka" [ref=f3e88]:
                      - generic [ref=f3e89]: 60.00৳
                      - text: via inside dhaka
                  - row [ref=f3e90]:
                    - rowheader "Total:" [ref=f3e91]
                    - cell "2,610.00৳" [ref=f3e92]
                  - row [ref=f3e94]:
                    - rowheader "Payment method:" [ref=f3e95]
                    - cell "Cash on delivery" [ref=f3e96]
                  - row [ref=f3e97]:
                    - rowheader "Actions:" [ref=f3e98]
                    - cell [ref=f3e99]:
                      - link "Invoice order number 11725" [ref=f3e100] [cursor=pointer]:
                        - /url: ""
                        - text: Invoice
            - generic [ref=f3e102]:
              - generic [ref=f3e103]:
                - heading "Billing address" [level=2] [ref=f3e104]
                - generic [ref=f3e105]:
                  - text: John ABRAHSMSDASFDSFGSDG
                  - paragraph [ref=f3e106]: "919238"
                  - paragraph [ref=f3e107]: DSAFDASEF@sddssGMAIL.COM
              - generic [ref=f3e108]:
                - heading "Shipping address" [level=2] [ref=f3e109]
                - generic [ref=f3e110]:
                  - text: John ABRAHSMSDASFDSFGSDG
                  - paragraph [ref=f3e111]: "919238"
    - contentinfo [ref=f3e112]:
      - generic [ref=f3e116]:
        - generic [ref=f3e117]:
          - generic [ref=f3e118]:
            - heading "CBX SHOP" [level=3] [ref=f3e123]
            - heading "CBX Shop is a Bangladeshi online marketplace offering a wide variety of gadgets and accessories, hardware tools, home appliances, and fashion items for men, women, and kids. Browse and purchase easily with convenient access to the latest products across Bangladesh." [level=5] [ref=f3e125]: CBX Shop is a Bangladeshi online marketplace offering a wide variety of gadgets and accessories, hardware tools, home appliances, and fashion items for men, women, and kids.Browse and purchase easily with convenient access to the latest products across Bangladesh.
            - list [ref=f3e127]:
              - listitem [ref=f3e128]:
                - link "Facebook" [ref=f3e129] [cursor=pointer]:
                  - /url: https://www.facebook.com/profile.php?id=61580703611886
              - listitem [ref=f3e133]:
                - link "Youtube" [ref=f3e134] [cursor=pointer]:
                  - /url: https://www.youtube.com/channel/UCtuo0RKewhA7tYtLaY4kGBA
              - listitem [ref=f3e138]:
                - link "User-friends" [ref=f3e139] [cursor=pointer]:
                  - /url: https://facebook.com/groups/1560852845327226/
              - listitem [ref=f3e143]:
                - link "Whatsapp" [ref=f3e144] [cursor=pointer]:
                  - /url: https://wa.me/+8801521728340
          - generic [ref=f3e148]:
            - heading "Help Zone" [level=2] [ref=f3e150]
            - list [ref=f3e154]:
              - listitem [ref=f3e155]:
                - link "FAQ" [ref=f3e156] [cursor=pointer]:
                  - /url: https://cbxshop.com/faq/
              - listitem [ref=f3e158]:
                - link "Payment Guidelines" [ref=f3e159] [cursor=pointer]:
                  - /url: https://cbxshop.com/payment-guidelines/
          - generic [ref=f3e161]:
            - heading "USEFUL LINKS" [level=2] [ref=f3e163]
            - list [ref=f3e167]:
              - listitem [ref=f3e168]:
                - link "Terms & Conditions" [ref=f3e169] [cursor=pointer]:
                  - /url: https://cbxshop.com/terms-conditions/
              - listitem [ref=f3e171]:
                - link "Returns & Refunds" [ref=f3e172] [cursor=pointer]:
                  - /url: https://cbxshop.com/returns-refunds/
              - listitem [ref=f3e174]:
                - link "Privacy Policy" [ref=f3e175] [cursor=pointer]:
                  - /url: https://cbxshop.com/privacy-policy/
              - listitem [ref=f3e177]:
                - link "Contact Us" [ref=f3e178] [cursor=pointer]:
                  - /url: https://cbxshop.com/contact-us/
              - listitem [ref=f3e180]:
                - link "About Us" [ref=f3e181] [cursor=pointer]:
                  - /url: https://cbxshop.com/about-us/
          - generic [ref=f3e183]:
            - heading "CONTACT INFO" [level=2] [ref=f3e185]
            - generic [ref=f3e190]:
              - heading "Our Address:" [level=4] [ref=f3e191]
              - paragraph [ref=f3e193]: Dhaka, bangladesh
            - generic [ref=f3e197]:
              - generic [ref=f3e198]:
                - heading "Our phone number:" [level=4] [ref=f3e199]
                - generic [ref=f3e200]:
                  - paragraph [ref=f3e201]: +8801632326470 (Calls)
                  - paragraph [ref=f3e202]: +8801521728340 (payments)
              - link "Infobox link" [ref=f3e203] [cursor=pointer]:
                - /url: tel:8801632326470
            - generic [ref=f3e208]:
              - heading "Our Email:" [level=4] [ref=f3e209]
              - paragraph [ref=f3e211]: info.cbxshop@gmail.com
        - paragraph [ref=f3e218]:
          - text: Copyright © 2026
          - link [ref=f3e219] [cursor=pointer]:
            - /url: https://wa.me/8801602154970
            - text: CBX
            - strong [ref=f3e220]: Shop
  - link "Scroll to top button" [ref=f3e223] [cursor=pointer]:
    - /url: "#"
    - text: 
  - navigation "Mobile navigation" [ref=f3e224]:
    - list [ref=f3e225]:
      - listitem [ref=f3e226]:
        - link "Gadget & Accessories" [ref=f3e227] [cursor=pointer]:
          - /url: https://cbxshop.com/product-category/gadget-accessories/
        - text:                  
        - generic [ref=f3e229] [cursor=pointer]: 
      - listitem [ref=f3e230]:
        - link "Home Appliance" [ref=f3e231] [cursor=pointer]:
          - /url: https://cbxshop.com/product-category/home-appliance/
        - text:             
        - generic [ref=f3e233] [cursor=pointer]: 
      - listitem [ref=f3e234]:
        - link "Hardware Tools" [ref=f3e235] [cursor=pointer]:
          - /url: https://cbxshop.com/product-category/hardware-tools/
        - generic [ref=f3e237] [cursor=pointer]: 
      - listitem [ref=f3e238]:
        - link "Ladies Item" [ref=f3e239] [cursor=pointer]:
          - /url: https://cbxshop.com/product-category/ladies-item/
        - text:  
        - generic [ref=f3e241] [cursor=pointer]: 
      - listitem [ref=f3e242]:
        - link "Gents Item" [ref=f3e243] [cursor=pointer]:
          - /url: https://cbxshop.com/product-category/gents-item/
        - text: 
        - generic [ref=f3e245] [cursor=pointer]: 
      - listitem [ref=f3e246]:
        - link "Kids Item" [ref=f3e247] [cursor=pointer]:
          - /url: https://cbxshop.com/product-category/kids-item/
        - generic [ref=f3e249] [cursor=pointer]: 
      - listitem [ref=f3e250]:
        - link " Wishlist" [ref=f3e251] [cursor=pointer]:
          - /url: https://cbxshop.com/wishlist/
          - text: 
          - generic [ref=f3e252]: Wishlist
      - listitem [ref=f3e253]:
        - link " Compare" [ref=f3e254] [cursor=pointer]:
          - /url: https://cbxshop.com/compare/
  - text: 
  - generic [ref=f3e255]: desktop
  - status
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | 
  3   | 
  4   | export class CheckoutPage{
  5   | 
  6   | 
  7   | constructor(page){
  8   | 
  9   | this.page = page;
  10  | 
  11  | 
  12  | this.firstName =
  13  | page.locator('#billing_first_name');
  14  | 
  15  | 
  16  | this.lastName =
  17  | page.locator('#billing_last_name');
  18  | 
  19  | 
  20  | this.email =
  21  | page.locator('#billing_email');
  22  | 
  23  | 
  24  | this.phone =
  25  | page.locator('#billing_phone');
  26  | 
  27  | 
  28  | this.address =
  29  | page.locator('#billing_address_1');
  30  | 
  31  | 
  32  | this.city =
  33  | page.locator('#billing_city');
  34  | 
  35  | 
  36  | this.placeOrder =
  37  | page.getByRole('button',{
  38  | name:/Place order/i
  39  | });
  40  | 
  41  | 
  42  | this.error =
  43  | page.locator('.woocommerce-error');
  44  | 
  45  | 
  46  | }
  47  | 
  48  | 
  49  | 
  50  | 
  51  | async verifyPage(){
  52  | 
  53  | await expect(this.page)
  54  | .toHaveURL(/checkout/);
  55  | 
  56  | }
  57  | 
  58  | 
  59  | 
  60  | async fillValidInfo(){
  61  | 
  62  | await this.firstName.fill('John');
  63  | 
> 64  | await this.lastName.fill('Tester');
      |                     ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  65  | 
  66  | await this.email.fill('test@gmail.com');
  67  | 
  68  | await this.address.fill('Dhaka');
  69  | 
  70  | await this.city.fill('Dhaka');
  71  | 
  72  | await this.phone.fill('01712345678');
  73  | 
  74  | }
  75  | 
  76  | 
  77  | 
  78  | async invalidPhone(){
  79  | 
  80  | await this.phone.fill('12345');
  81  | 
  82  | }
  83  | 
  84  | 
  85  | 
  86  | async invalidEmail(){
  87  | 
  88  | await this.email.fill('abc@');
  89  | 
  90  | }
  91  | 
  92  | 
  93  | 
  94  | async placeOrder(){
  95  | 
  96  | await this.placeOrder.click();
  97  | 
  98  | }
  99  | 
  100 | 
  101 | 
  102 | async verifyError(){
  103 | 
  104 | await expect(this.error)
  105 | .toBeVisible();
  106 | 
  107 | }
  108 | 
  109 | 
  110 | }
```