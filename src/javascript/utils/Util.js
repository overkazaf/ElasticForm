import Storage from './Storage';

const storeInstance = new Storage('storage-for-util');

export default class Util {

    static getCurrentUserId() {
        return storeInstance.get('userId');
    }

    static buildStyleObjet(keys, kvObject) {
        let style = {};
        keys.map((key) => {
            let styleKey = key;
            let styleValue = kvObject[key];
            if (key === 'fontStyle') {
                let values = styleValue ? styleValue.split('$') : "";
                values.length && values.map((kvPairs) => {
                    let [k, v] = kvPairs.split(':');
                    style[k] = v;
                });
            } else {
                if (key === 'fontColor') {
                    styleKey = 'color';
                    styleValue = styleValue.hex;
                }

                if (key === 'backgroundColor') {
                    styleValue = styleValue.hex;
                }

                if (key === 'visibility') {
                    styleKey = 'display';
                    styleValue = styleValue ? '' : 'none';
                }

                style[styleKey] = styleValue;
            }

        });

        return style;
    }

    static parseDataModel(option) {
        let {
            basicProps: {
                componentTheme: {
                    backgroundColor,
                    fontColor,
                    layoutStyle,
                    size,
                    theme,
                },
                inputValue: {
                    carry,
                    defaultValue,
                    label,
                    link,
                    linkTarget,
                    placeholder,
                    value,
                },
                inputDecoration: {
                    addonBefore,
                    addonAfter,
                    prefix,
                    suffix,
                },
                formStatus: {
                    visibility,
                    locked,
                    mustInput,
                    autoSum,
                },
                fontStyles: {
                    fontFamily,
                    fontStyle,
                    fontSize,
                    lineHeight,
                    textAlign,
                },
            },
        } = option;

        console.log('=================inside Util.js==================');
        console.log('mustInput', mustInput);

        [size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput, autoSum,
            defaultValue, value, link, linkTarget, placeholder, carry,
            addonBefore, addonAfter, prefix, suffix,
        ] = [size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput, autoSum,
            defaultValue, value, link, linkTarget, placeholder, carry,
            addonBefore, addonAfter, prefix, suffix,
        ].map(item => item.value);

        [fontStyle] = [fontStyle].map(item => item.values);

        let extraStyle = {};
        if (fontStyle) {
            let pairs = fontStyle.split('$');
            pairs.map((pair) => {
                let [k, v] = pair.split(':');
                extraStyle[k] = v;
            });
        }

        return {
            size,
            theme,
            label,
            fontFamily,
            fontSize,
            lineHeight,
            textAlign,
            visibility,
            locked,
            mustInput,
            autoSum,
            defaultValue,
            value,
            link,
            linkTarget,
            placeholder,
            carry,
            addonBefore,
            addonAfter,
            prefix,
            suffix,
            extraStyle,
        }
    }

    static overrideObject(src = {}, option = {}, deep = false) {
        if (Object.keys(obj).length) {
            for (let key in obj) {
                if (!deep) {
                    src[key] = obj[key];
                } else {
                    src[key] = Util.overrideObject(src[key], obj[key]);
                }
            }
        }

        return src;
    }
}
