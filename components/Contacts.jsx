import { useState } from 'react';

export default function Contacts() {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    if (!isChecked) {
      event.preventDefault();
    }
  };
  return (
    <section className="contacts">
      <div className="contacts__container">
        <h4 className="subtitle">Наши контакты</h4>
        <div className="contacts__content">
          <p className="text-1">
            Если ты хочешь связаться с нами, напиши сюда свои данные.
            <br className="contacts__br" />
            Мы свяжемся с тобой в ближайшее время
          </p>
          <form className="contacts__form" onSubmit={handleSubmit}>
            <div className="contacts__form_inputs">
              <div className="contacts__form_top">
                <input required type="text" className="contacts__form_name" placeholder="Имя" />
                <input
                  required
                  type="text"
                  className="contacts__form_surname"
                  placeholder="Фамилия"
                />
              </div>
              <input
                required
                type="text"
                className="contacts__form_telegram"
                placeholder="Telegram"
              />
            </div>
            <div className="contacts__form_checkbox checkbox">
              <input
                id="c_1"
                data-error="Ошибка"
                className="checkbox__input"
                type="checkbox"
                value="1"
                name="form[]"
                required
                onChange={() => setIsChecked(!isChecked)}
              />
              <label for="c_1" className="checkbox__label">
                <span className="checkbox__text">
                  Я согласен(на) с политикой конфиденциальности
                </span>
              </label>
            </div>
            <button type="submit" className={`submit-button button ${isChecked ? '' : 'disabled'}`}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
