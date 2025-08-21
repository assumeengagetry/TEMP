export default defineNuxtPlugin(() => {
  const { t, setLanguage, currentLanguage } = useLanguage()

  return {
    provide: {
      t,
      setLanguage,
      currentLanguage
    }
  }
})
