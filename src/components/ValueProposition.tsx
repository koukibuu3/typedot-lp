import { motion } from 'framer-motion'

const FocusIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="16" />
    <circle cx="24" cy="24" r="8" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
  </svg>
)

const AnalysisIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8,36 18,24 28,30 40,12" />
    <polyline points="32,12 40,12 40,20" />
  </svg>
)

const ContinueIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 8 L24 40" />
    <path d="M16 16 L24 8 L32 16" />
    <circle cx="24" cy="40" r="3" fill="currentColor" />
  </svg>
)

const values = [
  {
    title: '集中',
    description: '余計なUIを排除。文章とあなたの指だけ。',
    icon: FocusIcon,
  },
  {
    title: '分析',
    description: '精度・速度・苦手キーをシンプルに可視化。',
    icon: AnalysisIcon,
  },
  {
    title: '継続',
    description: '軽量設計で毎日開きたくなる。',
    icon: ContinueIcon,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
}

export function ValueProposition() {
  return (
    <section className="value-proposition">
      <motion.div
        className="value-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {values.map((value) => (
          <motion.div
            key={value.title}
            className="value-item"
            variants={itemVariants}
          >
            <div className="value-icon">
              <value.icon />
            </div>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-description">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
