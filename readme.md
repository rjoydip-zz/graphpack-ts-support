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
		"noEmit": false,
		"strict": true,
		"isolatedModules": true,
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