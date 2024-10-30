import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from '@/pages/Main'
import Header from '@/widgets/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="relative mx-auto flex w-full flex-col">
      <Header classNames={{ wrapper: 'top-0 absolute z-50 px-4' }} />
      <div className="max-w-[100vw]">
        <MainPage />
      </div>
    </main>
  </StrictMode>,
)
