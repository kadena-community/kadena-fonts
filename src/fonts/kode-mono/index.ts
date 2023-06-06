import { getFont } from '../../lib'
import type { TFontOptions, TReturn } from '../../types'

export type TKodeMonoFontWeight = 400 | 500 | 600 | 700

export const KodeMono = (options?: TFontOptions<TKodeMonoFontWeight, any>): TReturn => {
  return getFont({
    ...options,
    name: 'Kode Mono',
    type: 'monospace',
    variable: true,
    weight: options?.weight || 400,
    url: [
      {
        format: 'truetype',
        path: 'https://raw.githubusercontent.com/isaozler/kode-mono/main/fonts/variable/KodeMono%5Bwght%5D.ttf',
      },
      {
        format: 'woff2',
        path: 'https://raw.githubusercontent.com/isaozler/kode-mono/main/fonts/webfonts/KodeMono%5Bwght%5D.woff2',
      },
    ],
    fallback: 'monospace',
  })
}
