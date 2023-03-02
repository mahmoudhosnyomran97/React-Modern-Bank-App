import { card } from '../assets';
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo} data-aos="fade-down-right" data-aos-duration="2000">
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We Assure to provide You with the best deals available,
        Feel Free To Check out our card Deals and Choose What is most Comfort For you.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg} data-aos="fade-down-left" data-aos-duration="2000">
      <img src={card} alt='card' className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
