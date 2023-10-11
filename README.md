Zeller Frontend developer code test
Author: Wayne

Requirement can be found: [requirement.pdf](./assets/Frontend-Coding-Challenge.pdf)
It should look like [link of the image](./assets/zeller-customers-design.png)

Approach of the solution:
1. I do care about the format of the code, so I use eslint + prettier to format the code.
   1. `airbnb`, `airbnb-hooks`, `airbnb-typescript` and `prettier recommends` will be majorly used.
   2. some rules are disabled because of the conflict with `prettier` and `React>=17`.
   3. I will add one extra rule to disable `exports inside index.js` because I think it is not a good practice to have import without `{ import }`.
2. I checked the UI design, here are few things I found might be useful:
   1. User Types and Admin Users can share a Components: `Header`
   2. Can separate the UI into two pieces: `UserType` and `UserContent`, then combine them together `UserPage`
   3. I used color-picker found few colors might be reusable
      1. radio-box activated background color: #e8f2fb (also used in the avatar background)
      2. There are 3 dividers color: #f3f5f9
      3. font is special, I might need to import a font. (I found a free font called `Kalypsa`, but unfortunately, only medium size is free. I will put it in the public/font)