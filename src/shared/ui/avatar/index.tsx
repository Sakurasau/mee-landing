import { cn } from '@/shared/lib/cn'
import { FC } from 'react'

interface AvatarProps {
  src?: string
  classNames?: {
    wrapper?: string
    rounded?: string
    image?: string
    backlight?: string
  }
  backlight?: boolean
}

const Avatar: FC<AvatarProps> = ({ src, classNames, backlight }) => {
  return (
    <div className={cn('avatar relative size-12', classNames?.wrapper)}>
      <div className={cn('z-10 rounded-xl', classNames?.rounded)}>
        <img src={src} className={cn(classNames?.image)} />
      </div>
      {backlight && (
        <img
          src={src}
          className={cn(
            'rounded-large absolute z-0 -translate-x-1 object-cover opacity-65 blur-lg saturate-150 filter',
            classNames?.backlight,
          )}
        />
      )}
    </div>
  )
}

export default Avatar
