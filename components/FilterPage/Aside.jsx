import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Aside({ options, addQuery, isActive, toggle, isShown }) {
  const router = useRouter();
  const {
    query: { color, level, type, adaptive, language },
  } = router;

  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAdaptive, setSelectedAdaptive] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    setSelectedLevel(level || null);
    setSelectedType(type || null);
    setSelectedAdaptive(adaptive || null);
    setSelectedLanguage(language || null);
    setSelectedColor(color || null);
  }, [color, level, type, adaptive, language]);

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
    setSelectedLevel((prevLevel) => {
      const newLevel = prevLevel === level ? null : level;
      updateQueryString('level', newLevel);
      return newLevel;
    });
  };

  const handleTypeClick = (type) => {
    setSelectedType((prevType) => {
      const newType = prevType === type ? null : type;
      updateQueryString('type', newType);
      return newType;
    });
  };

  const handleAdaptiveClick = (adaptive) => {
    setSelectedAdaptive((prevAdaptive) => {
      const newAdaptive = prevAdaptive === adaptive ? null : adaptive;
      updateQueryString('adaptive', newAdaptive);
      return newAdaptive;
    });
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === language ? null : language;
      updateQueryString('language', newLanguage);
      return newLanguage;
    });
  };

  const handleColorClick = (color) => {
    setSelectedColor((prevColor) => {
      const newColor = prevColor === color ? null : color;
      updateQueryString('color', newColor);
      return newColor;
    });
  };

  const updateQueryString = (paramName, paramValue) => {
    const params = {
      ...(selectedLevel && { level: selectedLevel }),
      ...(selectedType && { type: selectedType }),
      ...(selectedAdaptive && { adaptive: selectedAdaptive }),
      ...(selectedLanguage && { language: selectedLanguage }),
      ...(selectedColor && { color: selectedColor }),
    };

    if (paramValue) {
      params[paramName] = paramValue;
    } else {
      delete params[paramName];
    }

    const newParams = new URLSearchParams(params).toString();
    setQueryString(newParams);
    addQuery(newParams);

    // Обновление URL
    router.push({
      pathname: router.pathname,
      query: newParams,
    });
  };

  return (
    <aside className={`filteraside ${isActive ? 'active' : ''}`}>
      <ul className={`filteraside__ul`}>
        <button onClick={toggle} className={`filteraside__button`}>
          <img src="/img/filter/close.svg" alt="" />
        </button>

        <li>
          <ul>
            <li className="filteraside__title">Сложность:</li>
            <li className="filteraside__points">
              <ul>
                {options.levels.map((data) => (
                  <li key={data.level}>
                    <button
                      className={`${selectedLevel === data.level ? 'selected' : ''}`}
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
                      className={`${selectedColor === data.color ? 'selected' : ''}`}
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
