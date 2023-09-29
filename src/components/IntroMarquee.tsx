import MarqueeElement from "./MarqueeElement";

export default function IntroMarquee() {
  return (
    <div className="marquee-wrap">
            <div className="marquee">
              <ul className="marquee_content left">
                <MarqueeElement style="transparent" content="react" />
                <MarqueeElement style="color" content="typescript" />
                <MarqueeElement style="transparent" content="scss" />
                <MarqueeElement style="color" content="css-in-js" />
              </ul>
              <ul aria-hidden="true" className="marquee_content left">
                <MarqueeElement style="transparent" content="react" />
                <MarqueeElement style="color" content="typescript" />
                <MarqueeElement style="transparent" content="scss" />
                <MarqueeElement style="color" content="css-in-js" />
              </ul>
            </div>
            <div className="marquee">
              <ul className="marquee_content right">
                <MarqueeElement style="color" content="nodejs" />
                <MarqueeElement style="transparent" content="express" />
                <MarqueeElement style="color" content="mongo" />
                <MarqueeElement style="transparent" content="rest api" />
              </ul>
              <ul aria-hidden="true" className="marquee_content right">
                <MarqueeElement style="color" content="nodejs" />
                <MarqueeElement style="transparent" content="express" />
                <MarqueeElement style="color" content="mongo" />
                <MarqueeElement style="transparent" content="rest api" />
              </ul>
            </div>
            <div className="marquee">
              <ul className="marquee_content left">
                <MarqueeElement style="color" content="github" />
                <MarqueeElement style="transparent" content="clean code" />
                <MarqueeElement style="color" content="testing" />
                <MarqueeElement style="transparent" content="optimization" />
              </ul>
              <ul aria-hidden="true" className="marquee_content left">
                <MarqueeElement style="color" content="github" />
                <MarqueeElement style="transparent" content="clean code" />
                <MarqueeElement style="color" content="testing" />
                <MarqueeElement style="transparent" content="optimization" />
              </ul>
            </div>
          </div>
  )
}