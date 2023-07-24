import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/LanguageSelector'
import './App.css'

function App() {
  const { t } = useTranslation()

  return (
    <>
    <LanguageSelector />
      {t("intro")}
    </>
  )
}

export default App
