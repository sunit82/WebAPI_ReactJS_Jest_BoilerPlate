# WebAPI_ReactJS_Jest_BoilerPlate
WebAPI + ReactJS + Jest + BoilerPlate project with dev supporting tools, build and automation-testing configuration using ESLint, Babel, Gulp, Typscript and Webpack

This is a boiler plate visual studio solution comprising of following main components required in today's combined engineering paradigm 
- ReactJS web application with sample components (HOME, ABOUT)
- ASP.Net Core 3 WebAPI which can be consumed in web-app to provide data.
- Jest automation tests to unit test the reactJS components.

In addition to above three basic components of a web application( UX, API and TESTS), the starter kit provides following dev tools in build for ease the devloper's life.
- ESLint - Linter tool keep the code clean and formatting. ".eslintrc.js" is the config file for ESLint.
- Babel - Helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version. "babel.config.json" is the config file for Babel.
- Gulp - Helps you out with several tasks when it comes to web development. We have configured this to run the tasks conifigured in webpack. In "gulpfile.ts" we can define more task.
- Webpack -  JavaScript module bundler for JavaScript and can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules. "webpack.config.ts" is the config file for Webpack.
- Typescript\TS - TypeScript is a superset of JavaScript that compiles to clean JavaScript output. In "tsconfig.ts" we can configure how and which files to transpile.

## Commands
Command to build the code<br/>
<b>npm run build</b>

Above command will do the following using tools we have configured(ESLint, Babel, Gulp, TSConfig, Webpack)-
- Check the code for the lint errors.
- Transpile the typescript to javascript.
- Convert the SCSS files to CSS.
- Minify & Bundle the generated JS in chucks of bundled javascript, CSS, images in one or multiple bundle files.
- Generate the result index.html using the index.template.html, which will contain reference to the index.bundle.js file.
- Output the transpiled JS, bundled JS, images and index.html in the wwwroot folder, so that the WebApp can run in SPA mode.
- If there are any build errors or warnings, they will be listed. eg. below snap shows couple of lint warnings.

![image](https://user-images.githubusercontent.com/20241763/94138496-da9c4000-fe85-11ea-9298-5b1b2a72b56a.png)


Command to run jest unit tests<br/>
<b>npm run test</b>

Above command will run all the mocha test. We can run one specific test suit by specify the file name with is command as below <br/>
<b>npm run test home-component.test</b>

![image](https://user-images.githubusercontent.com/20241763/94140080-58f9e180-fe88-11ea-9061-0a82c716f9ff.png)

## Setup & Run
1. Clone the repository.
2. Run the <i>npm install </i> command at <root folder>/Client folder.
3. Run the build  command the generate bundled output in wwwroot folder. <i>npm run build</i>
4. Open the .sln file in Visual Studio 2019.
5. Now press Ctrl+F5 to run the app in non debug mode in visual studio. This should open the web app home page.
   If the you click the "Click ME" button on home page and view the browser console window, the API call result should be visible.
   ![image](https://user-images.githubusercontent.com/20241763/94142814-78930900-fe8c-11ea-802e-f08f4c4e950e.png)

6. To call the API directly in browser, browse the URL - https<span></span>://localhost:44320/api/Home/Index

## Future scope of work.
- Add a unit test project for WebAPI code.
