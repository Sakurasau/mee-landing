import { LineMdChevronUp } from '@/shared/icons/LineMdChevronUp'
import { H1, H2 } from '@/shared/typography/typography'
import { BackgroundGradientAnimation } from '@/shared/ui/background-gradient-animation'
import { FlipWords } from '@/shared/ui/flip-words'
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

const sloganWords = ['beautiful', 'seamless', 'powerful', 'effortless']

const Content = () => (
  <>
    <div className="m-auto block text-wrap lg:w-[570px]">
      <H1>
        Welcome to{' '}
        <a className="text-primary" href="/c">
          Mee
        </a>
      </H1>
      <H2 className="text-wrap">
        The messenger that’s <FlipWords words={sloganWords} />
        for you
      </H2>
      <a
        className="group btn btn-neutral btn-active ml-auto mt-6 flex w-fit text-base text-primary lg:text-lg"
        href="/c">
        Try Mee
        <LineMdChevronUp className="inline-block size-6 rotate-90 transform transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
    {/* <button className="mx-auto flex flex-col items-center -space-y-1 p-2 text-center">
          <P>scroll down</P>
          <LineMdChevronUp className="size-5 rotate-180" />
        </button> */}
  </>
)

const MainSection: FC = () => {
  return (
    <section id="main" className="min-h-screen w-full">
      <BackgroundGradientAnimation {...BackgroundGradientAnimationProps}>
        <div className="absolute inset-0 z-30 flex flex-col px-6">
          <Content />
        </div>
        <div className="absolute bottom-0 z-30 h-[2%] w-full bg-gradient-to-b from-transparent to-base-100" />
      </BackgroundGradientAnimation>
    </section>
  )
}

export default MainSection
