import Image, { type ImageProps } from 'next/image'
import { imageDimensions } from '../lib/imageDimensions'

type CoverImageProps = Omit<ImageProps, 'fill' | 'width' | 'height' | 'src' | 'sizes'> & {
  src: string
  alt: string
  // Required: without it next/image would build a 1x/2x srcset from the full
  // intrinsic width (e.g. 1920/3840) instead of a responsive one.
  sizes: string
}

// Drop-in replacement for <Image fill className="object-cover" />. It renders
// the same absolutely positioned, object-cover image inside a `relative`
// parent, but with the image's real width/height attributes (from
// imageDimensions) so the markup carries intrinsic dimensions.
export default function CoverImage({ src, alt, className = '', ...rest }: CoverImageProps) {
  const dims = imageDimensions[src]
  if (!dims) {
    return <Image src={src} alt={alt} fill className={`object-cover ${className}`} {...rest} />
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={dims[0]}
      height={dims[1]}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      {...rest}
    />
  )
}
