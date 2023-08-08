import React from 'react';
import CountUp from 'react-countup';

export default function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h4 className="subtitle">О нас</h4>
        <div className="about__content">
          <h2>
            Миссия нашей команды - собрать лучшие макеты, которые будут полезны верстальщикам и
            дизайнерам
          </h2>
          <p className="text-2">
            Мы собираем коллекцию бесценного материала, который в легком доступе для каждого из вас.
            С нашими макетами ваш процесс обучения будет не только полезным, но и приятным. Сверстав
            макет из нашей коллекции, вы сможете дополнить свое портфолио уникальными проектами.
          </p>
          <div className="about__numbers">
            <div className="about__numbers_number">
              <p className="number">
                <span>
                  <CountUp enableScrollSpy scrollSpyOnce end={200} duration={3} />+
                </span>
              </p>
              <p>Собранных макетов</p>
            </div>
            <div className="about__numbers_number">
              <p className="number">
                <span>
                  <CountUp separator="" enableScrollSpy scrollSpyOnce end={9000} duration={3} />+
                </span>
              </p>
              <p>Подписчиков в Telegram</p>
            </div>
            <div className="about__numbers_number">
              <p className="number">
                <CountUp end={20} enableScrollSpy scrollSpyOnce duration={3} />
              </p>
              <p>Проведенных конкурсов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
