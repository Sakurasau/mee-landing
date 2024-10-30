import { LineMdChevronUp } from '@/shared/icons/LineMdChevronUp'
import { H1, P } from '@/shared/typography/typography'
import { BackgroundGradientAnimation } from '@/shared/ui/background-gradient-animation'
import { FC } from 'react'

const BackgroundGradientAnimationProps = {
  gradientBackgroundStart: 'rgb(0, 12, 34)',
  gradientBackgroundEnd: 'rgb(0, 17, 82)',
  firstColor: '73, 137, 245',
  secondColor: '120, 73, 245',
  thirdColor: '73, 82, 245',
  fourthColor: '73, 191, 245',
  fifthColor: '169, 55, 245',
  pointerColor: '140, 100, 255',
  size: '80%',
}

const MainSection: FC = () => {
  return (
    <section id="main" className="min-h-screen w-full">
      <BackgroundGradientAnimation {...BackgroundGradientAnimationProps}>
        <div className="absolute inset-0 z-30 flex flex-col">
          <H1 className="m-auto block">
            Welcome to <span className="text-primary">Mee</span>
          </H1>
          <button className="mx-auto flex flex-col items-center -space-y-1 p-2 text-center">
            <P>scroll down</P>
            <LineMdChevronUp className="size-5 rotate-180" />
          </button>
        </div>
      </BackgroundGradientAnimation>
    </section>
  )
}

export default MainSection
