import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Container, Typography } from "@components/ui";
import Link from "next/link";

// title anim
let opacityAnim = {};

opacityAnim = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.6,
      duration: 0.8,
      ease: "linear",
    },
  }),
};
// title anim

export const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      suppressHydrationWarning={true}
    >
      <Container>
        <div className="hero__wrapper stack column">
          <div className="hero__text-wrapper stack column">
            <div className="hero__type-wrapper">
              <TypeAnimation
                sequence={[
                  "Stealthy SERP Clicks - Real Behavior",
                  1000,
                  "Stealthy SERP Clicks - Real Results",
                  1000,
                  "Stealthy SERP Clicks - Real Impact",
                  1000,
                  "Stealthy SERP Clicks - Real Signals",
                  1000,
                  "Stealthy SERP Clicks - Real Traffic",
                  1000,
                  "Stealthy SERP Clicks - Real SEO Power",
                  1000,
                ]}
                className="hero__type"
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="42px"
                viewBox="0 0 1024 1024"
                preserveAspectRatio="xMidYMid meet"
              >
                <g fill="#4f2d9f">
                  <path d="M446.15 833.25 c-3.85 -1.05 -6.15 -2.40 -8.45 -4.85 -4.80 -5 -4.30 -11.55 1.50 -21.65 9.65 -16.65 11.65 -22.40 11.15 -31.95 -0.35 -7.20 -2.15 -12 -6.85 -18.40 -5 -6.80 -13.50 -12.10 -24 -14.95 -12.80 -3.45 -27.10 -3.15 -55.55 1.25 -24.20 3.75 -34 3 -41.75 -3.20 -5.25 -4.15 -7.50 -9.45 -7.05 -16.40 0.40 -6.55 2.50 -10.30 9.75 -17.55 10.15 -10.15 14 -15.95 15.35 -23.20 1.80 -9.55 -1.15 -18.60 -8.55 -26.10 -2.15 -2.20 -4.95 -4.70 -6.20 -5.60 -8.85 -6.25 -25.60 -11.90 -39.75 -13.45 -9.75 -1.05 -34.40 -1.40 -43.50 -0.60 -8 0.75 -13.25 0.45 -15.80 -0.85 -0.75 -0.40 -2.05 -1.60 -2.80 -2.60 -2.90 -3.80 -1.55 -8.75 6.45 -24.15 4 -7.70 8.75 -15.65 12.60 -21.10 1.15 -1.60 2.95 -4.15 4.05 -5.70 7.95 -11.35 20.55 -25.25 32.75 -36.20 2.90 -2.60 5.35 -4.85 5.50 -5 0.60 -0.75 14.05 -11.25 17 -13.25 1.80 -1.25 4.20 -2.90 5.30 -3.75 2.75 -1.95 9.60 -6.20 14.20 -8.75 2.05 -1.15 5.20 -2.95 7 -3.95 5.20 -3 19.90 -10 22.25 -10.60 0.70 -0.15 1.25 -0.60 1.25 -0.95 0 -0.40 -1.25 -2.45 -2.80 -4.60 -3.95 -5.45 -11.95 -19.10 -16.10 -27.40 -4.35 -8.65 -8.05 -17.85 -9.90 -24.75 -1.30 -4.75 -1.45 -5.95 -1.40 -13 0 -8.45 0.65 -11.70 5.20 -27.25 3.25 -11.05 11.55 -34.30 15.30 -42.75 0.90 -2.05 2.55 -6 3.70 -8.75 1.10 -2.75 2.25 -5.35 2.50 -5.85 0.25 -0.45 1.80 -3.80 3.40 -7.50 5.25 -11.65 20 -41.20 21.60 -43.10 0.25 -0.35 1.80 -2.95 3.40 -5.85 4.05 -7.10 9.55 -16.55 12 -20.45 1.10 -1.80 3.05 -4.95 4.25 -7 4.20 -7 20.90 -28.85 27.35 -35.65 3.30 -3.50 10.25 -9.40 17.20 -14.50 6.95 -5.15 19 -13.20 22.30 -14.90 1.25 -0.65 3.50 -1.90 5 -2.75 5.80 -3.40 20.75 -9.55 30.75 -12.70 15.45 -4.80 33.95 -2.95 51.75 5.15 0.95 0.45 3.45 1.50 5.50 2.40 12.30 5.15 30 15.45 45.20 26.25 6.45 4.55 13.30 10.90 20.80 19.20 11.90 13.20 18.65 23.50 38.85 59.25 5.25 9.30 15.65 30.55 22.25 45.50 10.75 24.35 21.20 52.60 25.40 68.65 0.55 2.15 1.30 5 1.70 6.45 3.90 14.05 2.55 30.65 -3.80 46.90 -1.70 4.40 -2.30 5.55 -6.25 11.65 -1.95 3 -2.95 4.10 -3.70 4.10 -0.60 0 -3.10 -0.75 -5.65 -1.70 -4.95 -1.85 -13.35 -4.05 -18 -4.65 -1.95 -0.25 -3.15 -0.70 -3.50 -1.25 -0.40 -0.65 0 -2.90 1.70 -9.50 2.15 -8.25 2.25 -9 2.25 -15.65 0 -8.45 -0.70 -11.15 -5.55 -21.20 -9.80 -20.20 -30.75 -46.10 -49.90 -61.60 -10.30 -8.35 -24.30 -18.30 -32.30 -22.95 -2.05 -1.20 -4.90 -2.90 -6.30 -3.80 -1.35 -0.90 -5.30 -3.15 -8.75 -5 -3.40 -1.85 -8.45 -4.55 -11.20 -6.05 -10.40 -5.60 -21.90 -9.80 -32.95 -11.95 -6.50 -1.30 -7.15 -1.30 -11 -0.75 -18.95 2.95 -42 13.50 -71.75 32.80 -6.35 4.10 -22.50 16.05 -27.95 20.65 -11.15 9.40 -25.80 25.95 -33.80 38.10 -1.35 2.05 -2.90 4.35 -3.40 5.10 -2.30 3.40 -7.60 14.85 -9.35 20.25 -3.70 11.25 -4.40 19.30 -2.35 27.60 3.85 15.55 13.20 30.90 31.90 52.55 9.90 11.50 30.45 31.70 38.45 37.85 1 0.75 4.60 3.75 8 6.65 7.30 6.15 8.40 7.05 17.95 14.15 16.30 12.15 41.25 26.95 52.05 30.90 4.90 1.80 5.85 2.25 7.30 3.60 1.15 1 1.15 1.10 0.80 10.65 -0.30 9.90 -0.05 13.75 1.90 30.20 1.15 9.45 1.40 10.45 3.75 17.15 2.05 5.85 2.15 7.55 0.60 8.45 -0.90 0.50 -9.95 0.70 -41.65 0.90 l-40.50 0.25 -3.15 1.70 c-5 2.70 -6.85 6.15 -6.50 12.20 0.20 4.45 1.40 7.05 4.25 9.15 3.70 2.80 3.95 2.80 58.65 2.65 27.35 -0.10 50.05 0 50.40 0.20 0.65 0.45 4.45 6.10 8.60 12.95 1.45 2.45 3.75 5.65 5.05 7.20 2.50 2.80 2.95 4 1.85 5.10 -0.45 0.45 -9.10 0.60 -35.75 0.60 -33.50 0 -35.25 0.05 -37.65 0.95 -5.70 2.15 -7.95 5.30 -8.35 11.50 -0.20 3.30 -0.05 4.10 0.95 6.05 1.35 2.65 4.75 5.10 8.25 6.05 1.85 0.50 15 0.70 58.65 0.80 61.85 0.15 57.85 -0.10 56.50 3.20 -0.65 1.50 -10.90 12.45 -21.50 22.95 -17.85 17.65 -31.05 27.25 -51.50 37.50 -11.05 5.55 -19 9 -30.45 13.05 -26.30 9.45 -47.70 13.65 -56.40 11.20z" />
                  <path d="M798.20 775.55 c-0.90 -0.20 -2.45 -0.95 -3.50 -1.55 -1.95 -1.20 -16.20 -14.70 -36.95 -35 -9.50 -9.30 -17.75 -17.10 -25.50 -24.20 -1.10 -1 -2.15 -1.80 -2.35 -1.80 -0.20 0 -2.55 1.40 -5.25 3.15 -14.10 9.10 -28 14.35 -46.40 17.40 -5.85 0.95 -7.80 1.05 -20 0.80 -10.75 -0.20 -14.70 -0.45 -19.50 -1.30 -28.05 -5 -54.30 -20.55 -72.20 -42.80 -14.65 -18.20 -22.15 -34.95 -26.30 -58.40 -1.10 -6.30 -1.25 -8.75 -1.25 -18.05 0 -7 0.25 -12.75 0.80 -16.40 3.75 -27.30 15.50 -51.50 34.35 -70.60 9.40 -9.50 17.50 -15.70 27.85 -21.25 12.40 -6.70 21.90 -10.25 33.50 -12.55 10.80 -2.15 17.30 -2.70 27.70 -2.35 30.85 1.05 57.55 12.55 80.95 34.85 7.70 7.30 17.85 21.05 22.55 30.50 0.65 1.25 2.10 4.10 3.25 6.35 4.05 8 7.65 20.30 10.05 34.05 1.25 7.20 1.40 25.45 0.25 33 -3.30 22 -10.45 39.40 -22.85 55.90 -1.05 1.40 -1.90 2.80 -1.90 3.10 0 0.25 1.60 1.95 3.55 3.70 1.95 1.70 5.40 4.95 7.65 7.15 5.30 5.30 35.35 34.80 43.10 42.40 3.60 3.50 6.65 6.95 7.45 8.45 1.30 2.40 1.35 2.80 1.15 7.60 -0.25 5.95 -1.45 9.05 -4.90 12.95 -3.20 3.60 -5.75 4.90 -10.10 5.10 -2 0.10 -4.35 0.05 -5.20 -0.20z m-123.90 -74.80 c5.30 -0.95 12.60 -2.90 17.05 -4.55 4.90 -1.85 16.85 -8.40 21.10 -11.55 11.20 -8.30 22.65 -22.40 28.65 -35.15 3.30 -7.05 6.40 -18.90 7.40 -28.25 1.60 -14.85 -2.50 -34.80 -9.80 -47.85 -1.50 -2.65 -2.70 -4.95 -2.70 -5.15 0 -0.20 -1.60 -2.65 -3.60 -5.45 -7.25 -10.25 -21.25 -22.30 -32 -27.65 -9.40 -4.65 -21.30 -8.25 -32.15 -9.70 -5.70 -0.75 -16.20 -0.30 -23.25 1 -6.45 1.15 -17.45 4.80 -23.85 7.90 -9.80 4.75 -21.15 13.60 -28.25 22 -5.35 6.35 -7 8.90 -12.75 19.65 -3.70 6.90 -7.35 19.90 -8.20 29 -0.70 7.50 -0.35 17.25 0.80 22.75 0.95 4.60 3.10 12.50 3.75 14 0.25 0.55 0.95 2.20 1.50 3.70 3.40 8.85 12.25 22.90 17.75 28.20 15.95 15.35 30.65 23.35 49.25 26.85 6.40 1.20 22.95 1.35 29.30 0.25z" />
                  <path d="M456.50 447.95 c-10.35 -2 -20.30 -10.20 -24.80 -20.35 -2.30 -5.20 -4.65 -13.30 -5.35 -18.60 -0.85 -6.05 -0.60 -13.20 0.45 -14.85 1.05 -1.60 3.35 -1.45 6.70 0.45 1.50 0.85 3.90 2.15 5.25 2.90 1.40 0.75 4.30 2.35 6.50 3.60 2.20 1.25 6.15 3.35 8.75 4.70 2.60 1.30 7.80 4.10 11.50 6.15 3.70 2.05 11.60 6.15 17.50 9.15 5.90 2.95 11.15 5.70 11.70 6.10 1.55 1.25 0.60 3 -4.60 8 -9.60 9.35 -13.35 11.75 -20.10 12.85 -3.35 0.55 -10.45 0.50 -13.50 -0.10z" />
                  <path d="M559.80 447.90 c-5.30 -0.85 -13.10 -5.85 -20.85 -13.30 -4.50 -4.35 -4.95 -5.75 -2.55 -7.60 2.85 -2.25 45 -26.95 52.10 -30.50 7.55 -3.80 12.25 -5.20 13.75 -4.10 0.30 0.20 0.95 1.10 1.45 2.05 0.80 1.50 0.95 2.70 0.90 8.10 -0.05 9.90 -1.65 16.40 -6.25 25.70 -2.15 4.35 -3.15 5.65 -7.30 9.75 -6.20 6.15 -10.80 8.60 -18.30 9.75 -5.55 0.80 -8.55 0.85 -12.95 0.15z" />
                </g>
              </svg>
            </div>
            <motion.div
              className="hero__text stack column"
              variants={opacityAnim}
              suppressHydrationWarning={true}
            >
              <Typography
                className="hero__title h1"
                tag="h1"
                weight="700"
                center
              >
                Ghost Reach
              </Typography>
              <div className="hero__bottom-text stack column">
                <Typography
                  className="hero__subtitle"
                  tag="h2"
                  weight="500"
                  center
                >
                  Stealthy Emulated SERP Clicks for Ranking Boost
                </Typography>

                <Typography className="hero__description" tag="p" center>
                  Ghost Reach is a SEO service that quietly amplifies your
                  search rankings using simulated human search behavior. It
                  delivers organic-looking clicks and engagement signals without
                  drawing unwanted attention. Designed for seasoned SEO
                  enthusiasts, Ghost Reach provides the invisible push your site
                  needs to climb the Google/Bong SERPs (Search Engine Results
                  Pages).
                </Typography>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero__button-wrapper"
            custom={2}
            variants={opacityAnim}
            suppressHydrationWarning={true}
          >
            <Link href="#howwork" className="hero__button button">
              Get started with Us
            </Link>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};
