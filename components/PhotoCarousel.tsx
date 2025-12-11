'use client'

import { useEffect, useRef } from 'react'

export default function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const scrollPositionRef = useRef(0)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    const carousel = carouselRef.current
    
    if (!track || !carousel) return

    // Clone items for seamless loop
    const items = track.querySelectorAll('div')
    items.forEach(item => {
      const clone = item.cloneNode(true)
      track.appendChild(clone)
    })

    const trackWidth = track.scrollWidth / 2
    const scrollSpeed = 1

    function animate() {
      if (!isPausedRef.current) {
        scrollPositionRef.current += scrollSpeed

        if (scrollPositionRef.current >= trackWidth) {
          scrollPositionRef.current = 0
        }

        if (track) {
          track.style.transform = `translateX(-${scrollPositionRef.current}px)`
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Pause on hover
    const handleMouseEnter = () => {
      isPausedRef.current = true
    }

    const handleMouseLeave = () => {
      const videos = carousel.querySelectorAll('video')
      let videoPlaying = false
      videos.forEach(video => {
        if (!video.paused) {
          videoPlaying = true
        }
      })
      if (!videoPlaying) {
        isPausedRef.current = false
      }
    }

    carousel.addEventListener('mouseenter', handleMouseEnter)
    carousel.addEventListener('mouseleave', handleMouseLeave)

    // Pause carousel when video starts playing
    const videos = carousel.querySelectorAll('video')
    videos.forEach(video => {
      video.addEventListener('play', () => {
        isPausedRef.current = true
      })
      video.addEventListener('pause', () => {
        if (!carousel.matches(':hover')) {
          isPausedRef.current = false
        }
      })
    })

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter)
      carousel.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const images = [
    'WhatsApp Image 2025-12-02 at 00.47.35_c441d2c4.jpg',
    'WhatsApp Image 2025-12-02 at 00.47.36_a048876d.jpg',
    'WhatsApp Image 2025-12-02 at 00.48.54_136247d9.jpg',
    'WhatsApp Image 2025-12-02 at 00.48.55_0bad4e86.jpg',
    'WhatsApp Image 2025-12-02 at 00.48.55_9adb686f.jpg',
    'WhatsApp Image 2025-12-02 at 00.48.55_d246acd4.jpg',
    'WhatsApp Image 2025-12-02 at 00.48.56_10b49940.jpg',
    'WhatsApp Image 2025-12-02 at 00.48.56_f6ea1f03.jpg',
  ]

  const video = 'WhatsApp Video 2025-12-02 at 00.48.53_8d23f9a9.mp4'

  return (
    <section className="py-8 bg-gradient-to-b from-secondary-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            <div 
              ref={trackRef}
              className="flex gap-4"
              style={{ width: 'max-content' }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-96">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <img 
                      src={`/images/${image}`}
                      alt={`Event Photo ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
              ))}
              <div className="flex-shrink-0 w-80 md:w-96">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
                  <video 
                    className="w-full h-64 md:h-80 object-cover" 
                    controls 
                    muted
                  >
                    <source src={`/images/${video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    Video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

