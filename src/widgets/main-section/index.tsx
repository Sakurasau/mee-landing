import { H1 } from '@/shared/typography/typography'
import { FC } from 'react'

const MainSection: FC = () => {
  return (
    <section id="main" className="inline-flex min-h-screen w-full">
      <H1 className="m-auto block">
        Welcome to <span className="text-primary">Mee</span>
      </H1>
    </section>
  )
}

export default MainSection
