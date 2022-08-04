## Portfolio
Single Page Application portfolio of @kulotsystems.


## Contribute

#### Write a Review About Me
If you've met me, and you want to be part of this application,
please write something about me by following these steps:
1. [**Fork**](https://docs.github.com/en/get-started/quickstart/fork-a-repo) this repository.
2. Duplicate [src/plugins/vuex-store/modules/reviews/yourfirstname.js](src/plugins/vuex-store/modules/reviews/yourfirstname.js)
   into your own `JavaScript` file in the same folder.

   Example: `john.js`

3. Import and add your file as a module inside
   [src/plugins/vuex-store/modules/store-reviews.js](src/plugins/vuex-store/modules/store-reviews.js).

    ```javascript
   // EXAMPLE
   import john from './reviews/john.js';
   ```
   
    ```javascript
        modules: {
            person1,
            person2,
            john
        }
    ```

4. Edit your file, commit your changes, then submit a [**pull request**](https://docs.github.com/en/pull-requests) to this repository.

Stay awesome!



## Project Setup

### Requirements

Download and install the following tools:
1. [**NodeJS**](https://nodejs.org/) to execute `npm` commands.
   
2. A **code editor** such as
   [VS Code](https://code.visualstudio.com),
   [Sublime Text](https://www.sublimetext.com),
   [WebStorm](https://www.jetbrains.com/webstorm) or
   [Notepad++](https://notepad-plus-plus.org/downloads).

### Installation

1. Clone or download this repository.
2. Open this project in your code editor.
3. Open this project's root folder in the terminal and execute these commands:

    #### Install dependencies
    ```sh
    npm install
    ```
    
    #### Compile and Hot-Reload for Development
    
    ```sh
    npm run dev
    ```
   <sup>Open the provided URL in your web browser, which takes a while to load for the first time.</sup>
    
    #### Compile and Minify for Production
    
    ```sh
    npm run build
    ```
   <sup>The output will be on a folder named `dist`.</sup>
   
   #### Running the Production Build
   Install [**http-server-spa**](http-server-spa) globally:
    ```sh
    npm install http-server-spa -g
    ```
   
   Then serve the contents of the `dist` folder:
    ```sh
    http-server-spa dist
    ```



## Preview
#### Staging
- **<https://kulotsystems.vercel.app>**
- **<https://kulotsystems.netlify.app>**

#### Production
- **<https://kulotsystems.tech/portfolio>**
