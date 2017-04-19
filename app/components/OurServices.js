import React from 'react';

const OurServices = () => {
  return(
    <section className="ourservices">
      <div className="container">
        <h2 className="ourservices__title">НАШИ УСЛУГИ</h2>
        <div className="ourservices-block">
          <div className="ourservices-block__item">
            <a href="/services/kontent-marketing/"><img src="images/our-list.svg"/>
            <p><strong>КОНТЕНТ - МАРКЕТИНГ</strong></p></a>
          </div>
          <div className="ourservices-block__item">
            <a href="/services/poiskovoe-prodvizhenie-sayta/"><img src="images/our-gauge.svg"/>
            <p><strong>КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ</strong></p></a>
          </div>
          <div className="ourservices-block__item">
            <a href="/services/audit-sayta/"><img src="images/our-audit.svg"/>
            <p><strong>АУДИТ САЙТА</strong></p></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices;
