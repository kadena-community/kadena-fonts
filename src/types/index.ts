export type TFont = {
  format: 'woff' | 'woff2' | 'truetype' | 'opentype'
  path: string
  style?: TOptions<string | number, string>['type']
}

export type TOptions<T, S = string> = {
  name: string
  url: TFont[]
  variable?: boolean
  weight: T
  style?: S
  type:
    | 'serif'
    | 'sans-serif'
    | 'monospace'
    | 'cursive'
    | 'fantasy'
    | 'system-ui'
    | 'ui-serif'
    | 'ui-sans-serif'
    | 'ui-monospace'
    | 'ui-rounded'
    | 'math'
    | 'emoji'
    | 'fangsong'
  fallback?: TFontFamily
}

export type TFontOptions<T, S> = Omit<TOptions<T, S>, 'name' | 'url' | 'type' | 'variable'>
export type TFontFaceSrc = `url('${string}') format('${string}')`
export type TCssVariable = `--${string}`
export type TFontFamily =
  | `${string}, ${TOptions<string | number, string>['type']}`
  | TOptions<string | number, string>['type']

export type TReturn = {
  className: string
  variable: TCssVariable
  style: {
    fontFamily: string
    fontWeight?: string | number
  }
}
