// Instead of prototypal inheritance
// we can use class inheritance instead

class TimestampedError extends Error {
  constructor(message, level = 0, timestamp = new Date().toISOString()) {
    super(`(${level}) ${message} @ ${timestamp})`);

    this.level = level;
    this.timestamp = timestamp;
  }
}

try {
  throw new TimestampedError('Testing!', 7);
}
catch (e)
{
  if (e.level > 6)
    console.error('ERROR!', e);
  else
    console.debug('DEBUG!', e);
}
