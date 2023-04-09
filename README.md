# Hassen's Amazon Clone

This is the source code for my Amazon clone project built with React.js, Stripe, and Material UI. The project includes features like integrated payment processing, a working cart, order management, address changing, and more.

You can access it here: https://hassen-amazo-clone.web.app/

## Installation

To run this project locally, you need to clone the repository and install the dependencies. You can do this by running the following commands in your terminal:
- `git clone git@github.com:HassenBenHadjHassen/Amazon-Clone-React.git`
- `cd repository`
- `npm install`


You also need to create a `.env` file in the root directory with your Stripe API keys. You can obtain these keys from the Stripe dashboard.

- `REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...`
- `REACT_APP_STRIPE_SECRET_KEY=sk_test_...`


## Usage

After installing the dependencies and setting up your Stripe API keys, you can start the development server by running the following command:

- `npm start`


This will start the development server at `http://localhost:3000`.

## Features

### Home

The home page of the website contains a list of featured products and a search bar to search for products.

### Cart

The cart page displays the products you have added to your cart, the total price, and a checkout button that takes you to the payment page.

### Payment

The payment page allows you to enter your shipping and payment information to complete the checkout process. The payment processing is handled by Stripe.

### Orders

The orders page displays a list of your previous orders and their status.

### Address

The address page allows you to change your shipping address.

## Stripe Integration

This project uses Stripe for payment processing. The payment page is built with Stripe Elements and the payment processing is handled by Stripe Checkout.

## Material UI Integration

This project uses Material UI for the user interface components and styling.

## Firebase Integration

This project uses Firebase for hosting, authentication, and database storage.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.
