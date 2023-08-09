import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header({ isFilter, toggle, isFilterActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [isWindowSize700, setWindowSize700] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add('lock');
      document.documentElement.classList.add('menu-open');
    } else {
      document.documentElement.classList.remove('menu-open');
      setTimeout(() => {
        document.documentElement.classList.remove('lock');
      }, 300);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize700(window.innerWidth >= 700);
    };

    handleResize(); // Вызываем функцию сразу для инициализации состояния ширины окна
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll(); // Вызываем функцию сразу для инициализации состояния скролла
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const href = (
    <a
      data-da=".menu__list,700"
      href="https://t.me/+UwcYLLHHQiRhNzFi"
      className="text-1 header__href">
      @figmamakets
    </a>
  );
  return (
    <header data-scroll className={scrolled ? 'header _header-scroll' : 'header'}>
      <div className="header__container">
        <a href={`/`} className="header__logo">
          <Image src="/img/logo.svg" alt="" width={26} height={40} />
        </a>
        {isFilter ? (
          <button className="_fitler-button" onClick={toggle}>
            Фильтр{' '}
            <div>
              <img className={isFilterActive ? 'hidden' : ''} src="/img/filter/filter.svg" alt="" />
              <img className={!isFilterActive ? 'hidden' : ''} src="/img/filter/close.svg" alt="" />
            </div>
          </button>
        ) : (
          ''
        )}
        <div className="header__menu menu">
          <button
            type="button"
            className="menu__icon icon-menu"
            onClick={() => setMenuOpen(!isMenuOpen)}>
            <span></span>
          </button>
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="/filter" className="menu__link">
                  Больше макетов
                </a>
              </li>
              <li className="menu__item">
                <a href="/contacts" className="menu__link">
                  Контакты
                </a>
              </li>
              {isWindowSize700 ? '' : href}
            </ul>
          </nav>
        </div>
        {isWindowSize700 ? href : ''}
      </div>
    </header>
  );
}
