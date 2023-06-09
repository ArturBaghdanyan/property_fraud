import facebook from '../../assets/footer_icons/facebook.svg';
import header from '../../assets/footer_icons/header.svg';
import instagram from '../../assets/footer_icons/instagram.svg';
import twitter from '../../assets/footer_icons/twitter.svg';
import { IFooter, footerlist, mobileAppUrl } from '../../data/footerList';

import style from './style.module.scss';
function Footer() {
  return (
    <div className={`${style.footer} container_spacing`}>
      <div className={style.footer_header}>
        <img src={header} alt="" />
      </div>
      <div className={style.footer_list}>
        {footerlist.map((item: IFooter) => (
          <div key={item.id} className={style.footer_piece}>
            <h3>{item.title}</h3>
            {item.list.map(elem => (
              <div key={`${Math.random()}`}>{elem}</div>
            ))}
            {item.text_1 && <div>{item.text_1}</div>}
            {item.text_2 && <div>{item.text_2}</div>}
          </div>
        ))}
        <div className={style.footer_piece}>
          <h3>{mobileAppUrl.title}</h3>
          <img src={mobileAppUrl.appStoreIcon} alt="" />
          <img src={mobileAppUrl.gpIcon} alt="" />
        </div>
      </div>
      <div className={style.footer_footerText}>
        <div className={style.footer_internet}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <div className={style.text}>
          © 2022 First Guardian Ltd. All rights reserved
        </div>
      </div>
    </div>
  );
}
export default Footer;
