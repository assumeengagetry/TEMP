import en from '../locales/en.json'
import zh from '../locales/zh.json'

export const useLanguage = () => {
  const messages = { en, zh }
  
  // 獲取初始語言設置
  const getInitialLanguage = () => {
    if (process.client) {
      return localStorage.getItem('language') || 'en'
    }
    return 'en'
  }

  const currentLanguage = ref(getInitialLanguage())

  // 翻譯函數
  const t = (key: string) => {
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

  // 設置語言
  const setLanguage = (lang: string) => {
    if (lang in messages) {
      currentLanguage.value = lang
      // 保存到 localStorage
      if (process.client) {
        localStorage.setItem('language', lang)
      }
    }
  }

  // 切換語言
  const toggleLanguage = () => {
    const newLang = currentLanguage.value === 'en' ? 'zh' : 'en'
    setLanguage(newLang)
  }

  // 在客戶端初始化時同步 localStorage
  if (process.client) {
    const savedLang = localStorage.getItem('language')
    if (savedLang && savedLang in messages) {
      currentLanguage.value = savedLang
    }
  }

  return {
    t,
    setLanguage,
    toggleLanguage,
    currentLanguage: readonly(currentLanguage)
  }
}
