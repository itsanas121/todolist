
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
		// success | #67d548 
		"--color-success-50": "232 249 228", // #e8f9e4
		"--color-success-100": "225 247 218", // #e1f7da
		"--color-success-200": "217 245 209", // #d9f5d1
		"--color-success-300": "194 238 182", // #c2eeb6
		"--color-success-400": "149 226 127", // #95e27f
		"--color-success-500": "103 213 72", // #67d548
		"--color-success-600": "93 192 65", // #5dc041
		"--color-success-700": "77 160 54", // #4da036
		"--color-success-800": "62 128 43", // #3e802b
		"--color-success-900": "50 104 35", // #326823
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #f06a6a 
		"--color-error-50": "253 233 233", // #fde9e9
		"--color-error-100": "252 225 225", // #fce1e1
		"--color-error-200": "251 218 218", // #fbdada
		"--color-error-300": "249 195 195", // #f9c3c3
		"--color-error-400": "245 151 151", // #f59797
		"--color-error-500": "240 106 106", // #f06a6a
		"--color-error-600": "216 95 95", // #d85f5f
		"--color-error-700": "180 80 80", // #b45050
		"--color-error-800": "144 64 64", // #904040
		"--color-error-900": "118 52 52", // #763434
		// surface | #f3f3f3 
		"--color-surface-50": "253 253 253", // #fdfdfd
		"--color-surface-100": "253 253 253", // #fdfdfd
		"--color-surface-200": "252 252 252", // #fcfcfc
		"--color-surface-300": "250 250 250", // #fafafa
		"--color-surface-400": "247 247 247", // #f7f7f7
		"--color-surface-500": "243 243 243", // #f3f3f3
		"--color-surface-600": "219 219 219", // #dbdbdb
		"--color-surface-700": "182 182 182", // #b6b6b6
		"--color-surface-800": "146 146 146", // #929292
		"--color-surface-900": "119 119 119", // #777777
		
	}
}