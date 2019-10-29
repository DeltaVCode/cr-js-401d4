import Q from '@nmq/q/client';

export default function useQ() {
  const queue = new Q('deeds');

  function subscribe(event, callback){
    queue.subscribe(event, callback);
  }

  function publish(q, event, message) {
    Q.publish(q, event, message);
  }

  return [publish, subscribe];
}
