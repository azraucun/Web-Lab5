# Assignment 5 - Simple Product Dashboard

This is my React assignment. I made a simple product dashboard using React and Vite.

## How to run
npm install
npm run dev

## What the app does
- Shows a list of 3 products (Laptop, Phone, Tablet)
- There is a button to show or hide the products
- You can type your name in the input and it says "Hello, (your name)"

## File Organization
- `main.jsx` - This is where the app starts. It renders App into the root div in index.html.
- `App.jsx` - This is the main component. I put the two states here: `showProducts` and `name`. It has the button, the input and the hello text. It shows ProductList only if showProducts is true.
- `components/ProductList.jsx` - Has the products array. I used `.map()` to make a Product for each item.
- `components/Product.jsx` - Shows one product's title and price. It only uses props, no state.
- `components/Card.jsx` - A box with border and padding. It shows whatever is inside it using `children`.

## Challenges
- At first it was hard to stop thinking about changing the DOM by hand. In React I just change the state and the UI updates by itself.
- I didn't understand controlled inputs at first. I learned that the input needs both `value` and `onChange` connected to state.
- I almost used the index as the key in map, but then I remembered it should be the id.
- I made a mistake once and wrote `onClick={handleClick()}`, so it ran immediately. I fixed it by removing the ().
- Understanding `children` in Card took some time, but now I get that Card doesn't need to know what is inside it.