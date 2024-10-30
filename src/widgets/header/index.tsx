import { LineMdGithub } from '@/shared/icons/LineMdGithub'
import { cn } from '@/shared/lib/cn'
import Avatar from '@/shared/ui/avatar'
import { FC } from 'react'

interface HeaderProps {
  classNames?: {
    wrapper?: string
  }
}

const Header: FC<HeaderProps> = ({ classNames }) => {
  return (
    <div
      className={cn(
        'navbar bg-base-100 bg-opacity-20 backdrop-blur transition-shadow',
        classNames?.wrapper,
      )}>
      <a
        className="h-auto w-full cursor-pointer gap-4 py-2 text-xl font-semibold"
        href="/">
        <Avatar src="https://avatars.githubusercontent.com/u/175748523?s=200&v=4" />
        Sakurasau
        <a
          className="btn btn-ghost ml-auto"
          href={'https://github.com/Sakurasau'}>
          <LineMdGithub className="size-5" />
        </a>
      </a>
    </div>
  )
}

export default Header
