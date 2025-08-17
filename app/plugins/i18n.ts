import en from '../locales/en.json'
import zh from '../locales/zh.json'

export default defineNuxtPlugin(() => {
  const currentLanguage = ref('en')
  const messages = { en, zh }

  const $t = (key: string) => {
    const keys = key.split('.')
    let value: any = messages[currentLanguage.value as keyof typeof messages]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  const setLanguage = (lang: string) => {
    if (lang in messages) {
      currentLanguage.value = lang
    }
  }

  return {
    provide: {
      t: $t,
      setLanguage,
      currentLanguage: readonly(currentLanguage)
    }
  }
})
