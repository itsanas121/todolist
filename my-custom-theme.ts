
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "8px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #0000ff 
        "--color-primary-50": "217 217 255", // #d9d9ff
        "--color-primary-100": "204 204 255", // #ccccff
        "--color-primary-200": "191 191 255", // #bfbfff
        "--color-primary-300": "153 153 255", // #9999ff
        "--color-primary-400": "77 77 255", // #4d4dff
        "--color-primary-500": "0 0 255", // #0000ff
        "--color-primary-600": "0 0 230", // #0000e6
        "--color-primary-700": "0 0 191", // #0000bf
        "--color-primary-800": "0 0 153", // #000099
        "--color-primary-900": "0 0 125", // #00007d
        // secondary | #ffffff 
        "--color-secondary-50": "255 255 255", // #ffffff
        "--color-secondary-100": "255 255 255", // #ffffff
        "--color-secondary-200": "255 255 255", // #ffffff
        "--color-secondary-300": "255 255 255", // #ffffff
        "--color-secondary-400": "255 255 255", // #ffffff
        "--color-secondary-500": "255 255 255", // #ffffff
        "--color-secondary-600": "230 230 230", // #e6e6e6
        "--color-secondary-700": "191 191 191", // #bfbfbf
        "--color-secondary-800": "153 153 153", // #999999
        "--color-secondary-900": "125 125 125", // #7d7d7d
        // tertiary | #e0541d 
        "--color-tertiary-50": "250 229 221", // #fae5dd
        "--color-tertiary-100": "249 221 210", // #f9ddd2
        "--color-tertiary-200": "247 212 199", // #f7d4c7
        "--color-tertiary-300": "243 187 165", // #f3bba5
        "--color-tertiary-400": "233 135 97", // #e98761
        "--color-tertiary-500": "224 84 29", // #e0541d
        "--color-tertiary-600": "202 76 26", // #ca4c1a
        "--color-tertiary-700": "168 63 22", // #a83f16
        "--color-tertiary-800": "134 50 17", // #863211
        "--color-tertiary-900": "110 41 14", // #6e290e
        // success | #1bd039 
        "--color-success-50": "221 248 225", // #ddf8e1
        "--color-success-100": "209 246 215", // #d1f6d7
        "--color-success-200": "198 243 206", // #c6f3ce
        "--color-success-300": "164 236 176", // #a4ecb0
        "--color-success-400": "95 222 116", // #5fde74
        "--color-success-500": "27 208 57", // #1bd039
        "--color-success-600": "24 187 51", // #18bb33
        "--color-success-700": "20 156 43", // #149c2b
        "--color-success-800": "16 125 34", // #107d22
        "--color-success-900": "13 102 28", // #0d661c
        // warning | #f8b525 
        "--color-warning-50": "254 244 222", // #fef4de
        "--color-warning-100": "254 240 211", // #fef0d3
        "--color-warning-200": "253 237 201", // #fdedc9
        "--color-warning-300": "252 225 168", // #fce1a8
        "--color-warning-400": "250 203 102", // #facb66
        "--color-warning-500": "248 181 37", // #f8b525
        "--color-warning-600": "223 163 33", // #dfa321
        "--color-warning-700": "186 136 28", // #ba881c
        "--color-warning-800": "149 109 22", // #956d16
        "--color-warning-900": "122 89 18", // #7a5912
        // error | #fb4170 
        "--color-error-50": "254 227 234", // #fee3ea
        "--color-error-100": "254 217 226", // #fed9e2
        "--color-error-200": "254 208 219", // #fed0db
        "--color-error-300": "253 179 198", // #fdb3c6
        "--color-error-400": "252 122 155", // #fc7a9b
        "--color-error-500": "251 65 112", // #fb4170
        "--color-error-600": "226 59 101", // #e23b65
        "--color-error-700": "188 49 84", // #bc3154
        "--color-error-800": "151 39 67", // #972743
        "--color-error-900": "123 32 55", // #7b2037
        // surface | #e6e6e6 
        "--color-surface-50": "251 251 251", // #fbfbfb
        "--color-surface-100": "250 250 250", // #fafafa
        "--color-surface-200": "249 249 249", // #f9f9f9
        "--color-surface-300": "245 245 245", // #f5f5f5
        "--color-surface-400": "238 238 238", // #eeeeee
        "--color-surface-500": "230 230 230", // #e6e6e6
        "--color-surface-600": "207 207 207", // #cfcfcf
        "--color-surface-700": "173 173 173", // #adadad
        "--color-surface-800": "138 138 138", // #8a8a8a
        "--color-surface-900": "113 113 113", // #717171

    }
}