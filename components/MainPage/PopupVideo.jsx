import React from 'react';
import YouTube from 'react-youtube';
export default function PopupVideo({ videoId, onClose }) {
  const opts = {
    playerVars: {
      // Флаг autoplay для автоматического воспроизведения видео
      autoplay: 1,
    },
  };
  return (
    <div id="popup" aria-hidden="false" class="popup popup_show">
      <div class="popup__wrapper">
        <div class="popup__content">
          <button data-close type="button" class="popup__close" onClick={onClose}>
            Закрыть
          </button>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </div>
  );
}
