import slugify from 'lodash.kebabcase'
import { TOptions, TFontFaceSrc, TReturn } from './types'

export const getFont = (options: TOptions<string | number, string>): TReturn => {
  const sources: TFontFaceSrc[] = []
  const weightKey = typeof options.weight === 'string' ? options.weight.toLowerCase() : options.weight
  const nameSlugged = slugify(options.name.trim())
  const id = 'fonts-' + nameSlugged + '-style'
  const fallbackFont = options.fallback ? ', "' + options.fallback + '"' : ', ' + options.type

  if (typeof window === 'undefined') {
    return {
      className: `fonts-${nameSlugged}-${weightKey}`,
      style: {
        fontFamily: options.name + fallbackFont,
        fontWeight: options.weight,
      },
      variable: `--font-${nameSlugged}`,
    }
  }

  const style = window.document.createElement('style')
  style.setAttribute('id', `${id}-${weightKey}`)

  if (Array.isArray(options.url) && options.url.length) {
    options.url.forEach(({ path, format }) => {
      sources.push(`url('${path}') format('${format}')`)
    })
  }

  style.appendChild(
    window.document.createTextNode(`
@font-face {
  font-family: '${options.name}';
  src: ${[...new Set(sources)].join(',')};
}

:root {
  --font-${nameSlugged}: "${options.name}", ${options.type};
}

.fonts-${nameSlugged}-${weightKey} {
  font-family: var(--font-${nameSlugged});
  font-weight: ${weightKey};
}
`)
  )

  const getPreviousStyles = window.document.getElementById(style.id)

  if (!getPreviousStyles) {
    const head = window.document.getElementsByTagName('head')[0]
    head.appendChild(style)
  }

  return {
    className: `fonts-${nameSlugged}-${weightKey}`,
    // @TODO: this should be converted to inline styling
    style: {
      fontFamily: options.name + ', ' + options.type,
      fontWeight: options.weight,
    },
    variable: `--font-${nameSlugged}`,
  }
}
