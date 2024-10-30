import './index.css'
import 'simplebar-react/dist/simplebar.min.css'
import SimpleBar from 'simplebar-react'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from '@/pages/Main'
import Header from '@/widgets/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="relative mx-auto flex w-full flex-col overflow-hidden">
      <SimpleBar className="max-h-screen" autoHide={true}>
        <Header classNames={{ wrapper: 'top-0 absolute z-50 px-6' }} />
        <MainPage />
      </SimpleBar>
    </main>
  </StrictMode>,
)
