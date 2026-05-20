import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 滚动显示动画 composable
 * 当元素进入视口时触发动画，带 staggered delay 支持
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options
  const isRevealed = ref(false)
  const el = ref(null)

  let observer = null

  onMounted(() => {
    if (!el.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isRevealed.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { el, isRevealed }
}

/**
 * 批量元素 staggered 动画
 * 用于列表/网格的依次入场效果
 */
export function useStaggerReveal(items = [], options = {}) {
  const { threshold = 0.1, baseDelay = 100, rootMargin = '0px 0px -30px 0px' } = options
  const revealedSet = ref(new Set())
  const containerRef = ref(null)

  let observer = null

  onMounted(() => {
    const elements = containerRef.value?.children
    if (!elements?.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const idx = Array.from(elements).indexOf(entry.target)
            setTimeout(() => {
              revealedSet.value.add(idx)
            }, idx * baseDelay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    Array.from(elements).forEach(el => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { containerRef, revealedSet }
}
