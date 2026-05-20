import { ref, computed } from 'vue'
import zh from './zh.js'
import en from './en.js'

const locales = { zh, en }
const STORAGE_KEY = 'jiedangweb-locale'

const currentLocale = ref(loadLocale())

function loadLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && locales[saved]) return saved
  } catch {}
  return 'zh'
}

export function useI18n() {
  const t = computed(() => locales[currentLocale.value])

  function setLocale(locale) {
    if (!locales[locale]) return
    currentLocale.value = locale
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {}
  }

  function toggleLocale() {
    setLocale(currentLocale.value === 'zh' ? 'en' : 'zh')
  }

  return {
    t,
    locale: currentLocale,
    setLocale,
    toggleLocale,
  }
}
