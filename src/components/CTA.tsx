import { motion } from "framer-motion";
import { useLatestRelease } from "../hooks/useLatestRelease";

export function CTA() {
  const { downloadUrl } = useLatestRelease();

  return (
    <section className="cta-section">
      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
      >
        <h2 className="cta-heading">タイピングを、はじめよう。</h2>

        <a
          href={downloadUrl ?? "#"}
          className="cta-button cta-button-large"
        >
          Download
        </a>
      </motion.div>
    </section>
  );
}
