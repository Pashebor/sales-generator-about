import React from 'react';

const WhyGenerator = () => {
  return(
    <section className="why">
      <div className="why-wrapper">
        <div className="container">
          <h2 className="why__title">ПОЧЕМУ ГЕНЕРАТОР ПРОДАЖ ?</h2>
          <h6 className="why__subtitle">Несколько фактов о компании:</h6>
          <div className="why-facts">
            <div className="why-facts__item">
              <figure>
                <img src="images/fact-grow.svg"/>
              </figure>
              <p>Более <strong>2 874 351</strong>  посетителей привлекли на сайты наших клиентов к <strong>2017</strong> году</p>
            </div>
            <div className="why-facts__item">
              <figure>
                <img src="images/fact-user.svg"/>
              </figure>
              <p><strong>67</strong> высококвалифицированных  специалистов работает в штате или удаленно</p>
            </div>
            <div className="why-facts__item">
              <figure>
                <img src="images/fact-list.svg"/>
              </figure>
              <p>Создали более  <strong>9 859</strong> материалов для наших клиентов</p>
            </div>
            <div className="why-facts__item">
              <figure>
                <img src="images/fact-case.svg"/>
              </figure>
              <p>Успели поработать с <strong>48</strong> представителями крупного и малого бизнеса</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default WhyGenerator;
