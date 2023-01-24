# Design Notes - Full Stack MERN app

Situation:

We have a typical modern retailer

We have internal CSRs. They take inbound calls and place orders for customers.

They need an app to do their work

## Existing manual process

Right CSRs are manually doing the following:

1. Get a phone call from customer
2. Check if existing customer
    a. YES: Look up customer details in Excel
    b. NO: Register - enter customer details in Excel
3. If they want to order
    a. Get the exact product(s)
        i. Lookup in parts catalog (digital)
    b. Check inventory (check the excel grid - updated daily)
4. [Completed building the order]
5. Collect payment
    a. We collect a card over the phone
    b. Order/payment info sent to Accounting
6. Sends order to Shipping/Receiving
7. Assemble the order
    a. When done, they send a memo to the CSR
8. Update inventory
9. Ship it
    a. Send a memo to the CSR
10. Order arrives to customer
    a. Daily, our Shipping clerk check UPS for order status
    b. For delivered orders, they send a memo to CSR

## Proposed solution

We will build an app centered aroung the CSR

It gives them access to:
- customer bio info
- order history
- order status info
- product info, including inventory info

## Business Objects/Entities
1. Customer
2. Order
3. Product
4. Address

## Properties of our Entities (schema)

1. Customer
- Customer ID
- First Name
- Last Name
- Preferred name
- pronoun
- Phone Number
- Notes
- Email
- Username
- Passwor0d
- AddressID

2. Address
- AddressID
- adressLine1
- addressLine2
- city
- state/province
- ZIP

3. Order
- OrderId
- Customer ID
- order_status [opened/assembled/shipped/delivered]
- order amount
- order date
- [List] product IDs
- notes

4. Product
- ProductID
- Inventory (amount on hand in the warehouse)
- Name
- Description
- Category
- UnitPrice
- SKU

## Functional Requirements

CRUD

Customers
- Create
- Read
- Update
- Delete

Address
- Create
- Read
- Update
- Delete

Order
- Create
- Read
- Update
- Delete

Product
- Read
- Update

API Endpoints table
Methods	            Urls	            Actions
GET	                api/address	        get all Addresses
GET                 api/address/:id     get Address by id
POST                api/address         create an Address
PUT                 api/address/:id     update Address by id
DELETE              api/address/:id     delete an address by id






GET	                api/tutorials/:id	get Tutorial by id
POST	            api/tutorials	    add new Tutorial
PUT	                api/tutorials/:id	update Tutorial by id
DELETE	            api/tutorials/:id	remove Tutorial by id
DELETE	            api/tutorials	    remove all Tutorials
GET	api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'



















## Design Notes

### Loose search for customers
- try to prevent duplicate entries

### Place for free-form info on customers
Examples: Preferred call times; delivery time preferences; other people at the time; etc.