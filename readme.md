# graphpack-ts-support

Support typecript in Graphpack through webpack.


## Setps

### Through webpack

- Install `ts-loader` and `typescript`
- Create tsconfig.json and paste below code.

```json
{
	"compilerOptions": {
		// Target latest version of ECMAScript.
		"target": "esnext",
		// Search under node_modules for non-relative imports.
		"moduleResolution": "node",
		// Process & infer types from .js files.
		"allowJs": true,
		// Don't emit; allow Babel to transform files.
		"noEmit": false,
		// Enable strictest settings like strictNullChecks & noImplicitAny.
		"strict": true,
		// Disallow features that require cross-file information for emit.
		"isolatedModules": true,
		// Import non-ES modules as default imports.
		"esModuleInterop": true
	},
	"include": [
		"src"
	]
}
```

- Create graphpack.config.js

```js
module.exports = {
    webpack: ({
        config,
        webpack
    }) => {
        config.module.rules.push({
            test: /\.tsx?$/,
            loader: 'ts-loader',
        });
        config.resolve = {
            extensions: ['.ts', '.tsx', '.js'],
        };
        return config;
    },
};
```

That's it. Enjoy :+1: