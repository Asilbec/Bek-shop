# E-commerce Website

This is an e-commerce website built using Next.js, Sanity.io, Tailwind CSS, and Stripe API. The website is designed to provide a seamless shopping experience with fast and responsive website performance.

## Features

- Product listings with search and filter options
- Dynamic product pages with product details, images, and reviews
- Shopping cart with the ability to add, remove and update items
- Checkout process with payment integration using Stripe API

## Technologies

- Next.js: A React framework for building server-side rendered and statically generated websites.
- Sanity.io: A headless CMS for managing website content.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Stripe API: A payment processing API for online businesses.

## Installation

1. Clone this repository to your local machine using `git clone https://github.com/Asilbec/Bek-shop/`
2. Install the required dependencies using `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:

```
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your_stripe_public_key>
NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
SANITY_DATASET=<your_sanity_dataset>
SANITY_API_TOKEN=<your_sanity_api_token>
```

4. Start the development server using `npm run dev`
5. Open `http://localhost:3000` in your browser to view the website.

## Deployment

To deploy this website, you can use a platform like Vercel or Heroku, which provide seamless deployment for Next.js applications. Make sure to add the environment variables to your deployment platform as well.

## Contributions

Contributions to this project are welcome. If you find a bug or want to suggest an enhancement, please open an issue or submit a pull request. Please make sure to follow the code style and conventions used in the project.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
