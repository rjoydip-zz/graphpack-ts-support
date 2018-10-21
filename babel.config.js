module.exports = api => {
    api.cache(true);
    return {
        "presets": [
            "@babel/typescript"
        ],
        "plugins": [
            "@babel/proposal-object-rest-spread"
        ]
    };
};