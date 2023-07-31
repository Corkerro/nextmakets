import { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';

export default function Faq() {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(
        'Макет был взят с бесплатного телеграм канала: https://t.me/figmamakets/7',
      );
      setIsCopied(true);

      // After a certain time (e.g., 2 seconds), reset the isCopied state back to false
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  const [isCopied, setIsCopied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className={`bufer ${isLoaded ? '_loaded' : ''} ${isCopied ? '_active' : '  '}`}>
        Текст скопирован в буфер обмена
      </div>
      <section className="faq">
        <div className="faq__container">
          <h4 className="subtitle">FAQ</h4>
          <div data-spollers classJName="faq__spollers">
            <div className={`faq__spollers_item spollers__item ${isOpen ? '_open' : ''}`}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                data-spoller
                className={`faq__spollers_title ${isOpen ? '_spoller-active' : ''} `}>
                <h3>
                  А это бесплатно?<span></span>
                </h3>
              </button>
              <Collapse isOpened={isOpen}>
                <div className="faq__spollers_body text-3">
                  Мы предоставляем эту услугу абсолютно бесплатно. Здесь вы можете свободно
                  развивать свои навыки без дополнительных затрат.
                </div>
              </Collapse>
            </div>
            <div className={`faq__spollers_item spollers__item ${isOpen1 ? '_open' : ''}`}>
              <button
                onClick={() => setIsOpen1(!isOpen1)}
                type="button"
                data-spoller
                className={`faq__spollers_title ${isOpen1 ? '_spoller-active' : ''} `}>
                <h3>
                  Должен ли я отметить автора?<span></span>
                </h3>
              </button>
              <Collapse isOpened={isOpen1}>
                <div className="faq__spollers_body text-3">
                  Да! При использовании наших ресурсов оставьте ссылку на нашу группу в Telegram:
                  <button onClick={handleCopyClick}>&#34;https://t.me/figmamakets/7&#34;</button>.
                  Мы ценим признание и поддержку нашей работы.
                </div>
              </Collapse>
            </div>
            <div className={`faq__spollers_item spollers__item ${isOpen2 ? '_open' : ''}`}>
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                type="button"
                data-spoller
                className={`faq__spollers_title ${isOpen2 ? '_spoller-active' : ''} `}>
                <h3>
                  Сколько по времени займет верстка?<span></span>
                </h3>
              </button>
              <Collapse isOpened={isOpen2}>
                <div className="faq__spollers_body text-3">
                  Время, необходимое для верстки, зависит от сложности конкретного макета и вашего
                  опыта. В среднем, для создания одностраничного макета, рекомендуется выделить
                  примерно один день, если работать без спешки. Однако, помните, что каждый проект
                  уникален и может потребовать больше или меньше времени.
                </div>
              </Collapse>
            </div>
            <div className={`faq__spollers_item spollers__item ${isOpen3 ? '_open' : ''}`}>
              <button
                onClick={() => setIsOpen3(!isOpen3)}
                type="button"
                data-spoller
                className={`faq__spollers_title ${isOpen3 ? '_spoller-active' : ''} `}>
                <h3>
                  Могу ли я переделать макет?<span></span>
                </h3>
              </button>
              <Collapse isOpened={isOpen3}>
                <div className="faq__spollers_body text-3">
                  Конечно, после того, как вы скопируете макет в свои &#34;Drafts&#34; (черновики),
                  у вас будет полная свобода вносить изменения в макет по своему усмотрению. Вы
                  можете настраивать его, изменять элементы и приспосабливать под свои потребности.
                </div>
              </Collapse>
            </div>
            <div className={`faq__spollers_item spollers__item ${isOpen4 ? '_open' : ''}`}>
              <button
                onClick={() => setIsOpen4(!isOpen4)}
                type="button"
                data-spoller
                className={`faq__spollers_title ${isOpen4 ? '_spoller-active' : ''} `}>
                <h3>
                  Как скопировать макет себе?<span></span>
                </h3>
              </button>
              <Collapse isOpened={isOpen4}>
                <div className="faq__spollers_body text-3">
                  Чтобы скопировать макет себе, просто откройте файл в Figma и выберите опцию
                  &#34;Duplicate to your Drafts&#34; (Дублировать в черновики). Таким образом, макет
                  будет скопирован в вашу личную папку &#34;Drafts&#34; для дальнейшей работы и
                  редактирования.
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
