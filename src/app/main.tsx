import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from '@/pages/Main'
import Header from '@/widgets/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="mx-auto flex w-full flex-col">
      <Header classNames={{ wrapper: 'sticky top-0 z-50 px-4' }} />
      <div className="max-w-[100vw] px-4">
        <MainPage />
      </div>
    </main>
  </StrictMode>,
)
