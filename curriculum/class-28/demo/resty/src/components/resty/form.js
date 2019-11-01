import React, { useState } from 'react';

export default function RequestForm(props) {
  const { onRequest } = props;
  const [url, setUrl] = useState('');

  const handleUrlChange = event => {
    let value = event.target.value;
    setUrl(value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    onRequest(url);
  }

  return (
    <form onSubmit={handleSubmit}>
      <section id="url-entry">
        <input
          type="text"
          className="wide"
          name="url"
          placeholder="URL"
          value={url}
          onChange={handleUrlChange}
        />
        <label>
          <button type="submit">Go!</button>
        </label>
      </section>
    </form>
  );
}