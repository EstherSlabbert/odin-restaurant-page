# The Odin Project: Restaurant Page

This is my solution for the Odin Project's Restaurant Page project, the specifications of which can be found [here](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

## Set up for project

- `npm init` and follow prompts to create project.
- `npm install webpack webpack-cli --save-dev` to install webpack.
- `npm i html-webpack-plugin` to install HTML webpack plugin.
- Create `src/index.html` and `src/index.js` files.
- Create `webpack.config.js` in root of project directory with the following minimum content:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
```

- `npx webpack --config webpack.config.js` to run the build with the webpack config you set. This should generate the files in the `./dist` folder. (command can be run without `--config webpack.config.js` flag if it has the default name as it does).

- Add `"build": "webpack"` to scripts section of package.json file. Now you can run build command by typing `npm run`.

- `npx webpack --watch` will not have to rerun webpack every time you make a change to your `.js` files.

- `npm install --save-dev style-loader css-loader` to add css to webpack and add the following to your `webpack.config.js`:

```js
module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
```

## Acknowledgements

Images:

- [Logo](https://icons8.com/icon/eAgpKscqc6dC/restaurant)
- [Restaurant sign](https://unsplash.com/photos/a-person-standing-outside-of-a-restaurant-at-night-7QOrc12juBI) by [MakoMakt](https://unsplash.com/@makomakt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Reflection of a Bike](https://unsplash.com/photos/a-reflection-of-a-bike-in-a-puddle-of-water-KXNTfIg6rVM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Ed Leszczynskl](https://unsplash.com/@ed_leszczynskl?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Pancakes](https://unsplash.com/photos/brown-and-white-bread-on-white-ceramic-plate-exyTIrXyqm0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Eiliv Aceron](https://unsplash.com/@shootdelicious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Burger with Lettuce and Tomato](https://unsplash.com/photos/burger-with-lettuce-and-tomato-uOsGAtKos8g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [osama bgid](https://unsplash.com/@osamabgid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Grilled Breads on Plate](https://unsplash.com/photos/grilled-breads-on-plate-Q-AUYsdKdww?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [micheile henderson](https://unsplash.com/@micheile?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Onion Rings](https://www.pexels.com/photo/onion-rings-in-close-up-shot-9738991/) by Alberta Studios
- [Person Sprinkling Salt in Fries](https://unsplash.com/photos/person-sprinkling-salt-in-fries-LEjEst7lLfU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Emmy Smith](https://unsplash.com/@emsmith?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Chocolate Cake](https://unsplash.com/photos/chocolate-cake-6TTy4uKh0ck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Pesce Huang](https://unsplash.com/@pesce?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Time-Lapse Coffee](https://unsplash.com/photos/time-lapse-photography-of-coffee-on-cup-5iRgh_G0eRY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Devin Avery](https://unsplash.com/@devintavery?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [White Ceramic Mug](https://unsplash.com/photos/white-ceramic-mug-on-brown-wooden-table-gXtvTOs4tzg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Zoe](https://unsplash.com/@_imd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Cream and Chocolate milkshake](https://unsplash.com/photos/jar-with-handle-filled-with-cream-and-chocolate-on-table-VnsBx4onRxQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Oscar Nord](https://unsplash.com/@oscnord?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Clear Drinking Glass with soda](https://unsplash.com/photos/clear-drinking-glass-with-brown-liquid-PZsso_IiYRE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash) by [Qasim Malick](https://unsplash.com/@qasimmalick?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)
- [Apple Pie Cake](https://pixabay.com/photos/apple-pie-cake-apples-dessert-3594534/) by [anialaurman](https://pixabay.com/users/anialaurman-427293/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3594534)
- [Sandwich BLT](https://pixabay.com/photos/sandwich-blt-seafood-bacon-food-696417/) by [Katy Lynch](https://pixabay.com/users/savortonight-890668/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=696417)
- [Omelette](https://pixabay.com/photos/restaurant-cooking-meal-food-1762236/) by [takedahrs](https://pixabay.com/users/takedahrs-12657/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1762236)
