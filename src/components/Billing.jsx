import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse} data-aos="zoom-out-right" data-aos-duration="1500">
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo} data-aos="zoom-out-left" data-aos-duration="1500">
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Invoices can be sent in the mail, and you can easily accept
        payment with the different payment gateways available with Invoicera.
        Ultimately, it will save you time and money when it comes to billing your customers.
        Moreover, all is stored safely on a single platform.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple-store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google-play-store" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
)

export default Billing
