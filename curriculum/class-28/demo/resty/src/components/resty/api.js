import superagent from 'superagent';

export default function makeRequest(method, url, body) {
  return superagent(method, url)
      .set('Content-Type', 'application/json')
      .send(body)
      .then(response => {
        let header = response.header;
        let body = response.body;
        return ({
          header, body,
        });
      })
      .catch(e => {
        let body = { error: e.message };
        let header = {};
        return ({
          header, body,
        });
      });
}