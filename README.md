Zeller Frontend developer code test
Author: Wayne

Requirement can be found: [requirement.pdf](./assets/Frontend-Coding-Challenge.pdf)
It should look like [link of the image](./assets/zeller-customers-design.png)

Approach of the solution:
1. I do care about the format of the code, so I use eslint + prettier to format the code.
   1. `airbnb`, `airbnb-hooks`, `airbnb-typescript` and `prettier recommends` will be majorly used.
   2. some rules are disabled because of the conflict with `prettier` and `React>=17`.
   3. I will add one extra rule to disable `exports inside index.js` because I think it is not a good practice to have import without `{ import }`.