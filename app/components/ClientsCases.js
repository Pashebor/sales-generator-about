import React from 'react';

const ClientsCases = () => {
  return(
    <section className="clients-cases">
      <div className="container">
        <h2 className="clients-cases__title">КЕЙСЫ НАШИХ КЛИЕНТОВ</h2>
      <div className="clients-cases-block">
        <div className="clients-cases-block__item">
          <figure>
            <img src="images/facts-work-deal.jpg" alt="Логотип Слово-Дело" title="Слово-Дело"/>
          </figure>
          <p><strong>Полиграфический</strong></p>
          <p><strong>холдинг</strong></p>
          <a href="slovodelo.ru"><strong>slovodelo.ru</strong></a>
          <p>Результаты за <strong>11</strong> месяцев работы:</p>
          <figure>
            <img src="images/work-deal-clients.png" alt="Привлекли клиентов для Слово Дело" title="Рост клиентов у Слово Дело"/>
          </figure>
        </div>
        <div className="clients-cases-block__item">
          <figure>
            <img src="images/facts-gd.jpg" alt="Логотип Генеральный директор" title="Генеральный директор"/>
          </figure>
          <p><strong>Персональный журнал</strong></p>
          <p><strong>руководителя</strong></p>
          <a href="gd.ru"><strong>gd.ru</strong></a>
          <p >Результаты за <strong>19</strong> месяцев работы:</p>
          <figure>
            <img src="images/gd-clients.png" alt="Привлекли клиентов для Генерального Директора" title="Рост клиентов у Генерального Директора"/>
          </figure>
        </div>
        <div className="clients-cases-block__item">
          <figure>
            <img src="images/facts-osen.jpg" alt="Логотип Пансионат Осень" title="Пансионат Осень"/>
          </figure>
          <p><strong>Сеть пансионатов для</strong></p>
          <p><strong>пожилых людей</strong></p>
          <a href="pansionat-osen.ru"><strong>pansionat-osen.ru</strong></a>
          <p >Результаты за <strong>12</strong> месяцев работы:</p>
          <figure>
            <img src="images/osen-clients.png" alt="Привлекли клиентов для Пансионат Осень" title="Рост клиентов у Пансионат Осень"/>
          </figure>
        </div>
      </div>
      <div className="clients-cases__btn-block">
        <a href="#" className="clients-cases__btn-block__button">Посмотреть другие кейсы</a>
      </div>
    </div>
    </section>
  )
}

export default ClientsCases;
