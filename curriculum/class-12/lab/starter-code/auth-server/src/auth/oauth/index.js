const google = require('./google');

const providers = {
  google,
};

module.exports = async (req) => {
  let providerName = req.params.provider || 'google';
  let provider = providers[providerName];

  if (!provider) throw `Provider ${providerName} not found`;

  return await provider(req);
}
