import React, { useEffect, useState } from 'react';

export default function Aside({ options, addQuery, isActive }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAdaptive, setSelectedAdaptive] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [queryString, setQueryString] = useState('');

  addQuery(queryString);

  useEffect(() => {
    const params = [];
    if (selectedLevel) params.push(`level=${selectedLevel}`);
    if (selectedType) params.push(`type=${selectedType}`);
    if (selectedAdaptive) params.push(`adaptive=${selectedAdaptive}`);
    if (selectedLanguage) params.push(`language=${selectedLanguage}`);
    if (selectedColor) params.push(`color=${selectedColor}`);

    setQueryString(params.length > 0 ? `?${params.join('&')}` : '');
  }, [selectedLevel, selectedType, selectedAdaptive, selectedLanguage, selectedColor]);

  const handleLevelClick = (level) => {
    setSelectedLevel(level === selectedLevel ? null : level);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  const handleAdaptiveClick = (adaptive) => {
    setSelectedAdaptive(adaptive === selectedAdaptive ? null : adaptive);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language === selectedLanguage ? null : language);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <aside className={`filteraside ${isActive ? 'active' : ''}`}>
      <ul className={`filteraside__ul`}>
        <li>
          <ul>
            <li className="filteraside__title">Сложность:</li>
            <li className="filteraside__points">
              <ul>
                {options.levels.map((data) => (
                  <li key={data.level}>
                    <button
                      className={selectedLevel === data.level ? 'selected' : ''}
                      onClick={() => handleLevelClick(data.level)}>
                      {data.level}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="filteraside__title">Тип:</li>
            <li className="filteraside__points">
              <ul>
                {options.types.map((data) => (
                  <li key={data.type}>
                    <button
                      className={selectedType === data.type ? 'selected' : ''}
                      onClick={() => handleTypeClick(data.type)}>
                      {data.type}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="filteraside__title">Адаптивность:</li>
            <li className="filteraside__points">
              <ul>
                {options.adaptives.map((data) => (
                  <li key={data.adaptive}>
                    {' '}
                    <button
                      className={selectedAdaptive === data.adaptive ? 'selected' : ''}
                      onClick={() => handleAdaptiveClick(data.adaptive)}>
                      {data.adaptive}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="filteraside__title">Язык:</li>
            <li className="filteraside__points">
              <ul>
                {options.language.map((data) => (
                  <li key={data.language}>
                    <button
                      className={selectedLanguage === data.language ? 'selected' : ''}
                      onClick={() => handleLanguageClick(data.language)}>
                      {data.language}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="filteraside__title">Цветовая тема:</li>
            <li className="filteraside__points">
              <ul>
                {options.colors.map((data) => (
                  <li key={data.color}>
                    {' '}
                    <button
                      className={selectedColor === data.color ? 'selected' : ''}
                      onClick={() => handleColorClick(data.color)}>
                      {data.color}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
