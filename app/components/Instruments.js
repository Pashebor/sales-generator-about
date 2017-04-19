import React from 'react';

const Instruments = () => {
    return(
        <section className="instruments">
            <div className="container">
                <h2 className="instruments__title">ИНСТРУМЕНТЫ ДЛЯ РОСТА ВАШЕГО БИЗНЕСА</h2>
                <div className="instruments-block">
                    <div className="instruments-block__item">
                        <p><img src="images/graph-icon.svg"/>SEO продвижение</p>
                        <p><img src="images/gear-icon.svg"/>Оптимизация сайта</p>
                        <p><img src="images/atom-icon.svg"/>Семантическое ядро</p>
                        <p><img src="images/lead-icon.svg"/>Лидогенерация</p>
                        <p><img src="images/consult-icon.svg"/>Консалтинговые услуги</p>
                    </div>
                    <div className="instruments-block__item">
                        <p><img src="images/smm-icon.svg"/>SMM продвижение</p>
                        <p><img src="images/anchor-icon.svg"/>Ссылочная масса</p>
                        <p><img src="images/marketing-icon.svg"/>Контент-маркетинг</p>
                        <p><img src="images/design-icon.svg"/>Веб-дизайн</p>
                        <p><img src="images/complex-icon.svg"/>Комплексное продвижение</p>
                    </div>
                    <div className="instruments-block__item">
                        <p><img src="images/email-icon.svg"/>E-MAIL маркетинг</p>
                        <p><img src="images/audit-icon.svg"/>Аудит сайта</p>
                        <p><img src="images/adaptive-icon.svg"/>Адаптивная вёрстка</p>
                        <p><img src="images/usability-icon.svg"/>​Юзабилити сайта</p>
                        <p><img src="images/landing-icon.svg"/>Landing page</p>
                    </div>
                    <div className="instruments-block__item">
                        <p><img src="images/meta-icon.svg"/>Мета-теги</p>
                        <p><img src="images/converse-icon.svg"/>Конверсия</p>
                        <p><img src="images/develope-icon.svg"/>Разработка сайта</p>
                        <p><img src="images/cta-icon.svg"/>СТА-элементы</p>
                        <p><img src="images/indexing-icon.svg"/>Индексация сайта</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Instruments;