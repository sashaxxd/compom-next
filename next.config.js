
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');


const path = require('path');

const cssModuleRegex = /\.module\.css$/;

module.exports = withFonts(withImages(withCSS({

        cssModules: true,
        cssLoaderOptions: {
            getLocalIdent: (loaderContext, _, localName) => {
                const fileName = path.basename(loaderContext.resourcePath);

                if (cssModuleRegex.test(fileName)) {
                    const name = fileName.replace(/\.[^/.]+$/, '');
                    return `${name}__${localName}`;
                }

                return localName;
            },
        },
})
));