import { CCarousel, CCarouselItem, CCardText } from '@coreui/react'
import { aboutMe } from './portfolioData'

const { description1, description2, description3, description4 } = aboutMe

const Carousel = () => {
  const descriptions = [description1, description2, description3, description4]
  return (
    <CCarousel className="max-w-xl">
      {descriptions.map((description, index) => (
        <CCarouselItem key={index}>
          <CCardText className="text-lg max-w-xl min-h-64 md:min-h-40">
            {description}
          </CCardText>
        </CCarouselItem>
      ))}
    </CCarousel>
  )
}

export default Carousel
