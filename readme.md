# graphpack-ts-support

Support typecript in Graphpack through webpack.


## Setps

### Through webpack

- Install `ts-loader` and `typescript`
- Create tsconfig.json and paste below code.

```js
{
	"compilerOptions": {
		"target": "esnext",
		"moduleResolution": "node",
		"allowJs": true,
		"noEmit": false,  // for ts only
		"strict": true,
		"isolatedModules": true,
		"esModuleInterop": true
	},
	"include": [
		"src"
	]
}
```

- Create graphpack.config.js and paste below code

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

### Through babel

- Install `@babel/plugin-proposal-object-rest-spread` and `@babel/preset-typescript`

- Create tsconfig.json and paste below code.

```js
{
	"compilerOptions": {
		"target": "esnext",
		"moduleResolution": "node",
		"allowJs": true,
		"noEmit": true, // for babel only
		"strict": true,
		"isolatedModules": true,
		"esModuleInterop": true
	},
	"include": [
		"src"
	]
}
```

- Create `babel.config.js` and paste below code

```js
module.exports = api => {
    api.cache(true);
    return {
        "presets": [
            "@babel/typescript"
        ],
        "plugins": [
            "@babel/proposal-object-rest-spread" // don't know wheher this plugin isn't in core
        ]
    };
};
```

That's it. Enjoy :+1: