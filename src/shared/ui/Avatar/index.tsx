import { cn } from '@/shared/lib/cn'
import { FC } from 'react'

interface AvatarProps {
  src?: string
  classNames?: {
    wrapper?: string
    rounded?: string
    image?: string
  }
}

const Avatar: FC<AvatarProps> = ({ src, classNames }) => {
  return (
    <div className={cn('avatar size-12', classNames?.wrapper)}>
      <div className={cn('rounded-xl', classNames?.rounded)}>
        <img src={src} className={cn(classNames?.image)} />
      </div>
    </div>
  )
}

export default Avatar
