import { useEffect } from 'react';

export default function usePostMessage(callback) {
  function send(payload) {
    window.postMessage(payload, '*');
  }

  useEffect(() => {
    function _handleEvent(payload) {
      if (callback) {
        callback(payload.data);
      }
    }

    window.addEventListener('message', _handleEvent, false);

    return () => {
      window.removeEventListener('message', _handleEvent);
    };
  }, [callback]);

  return [send];
}
