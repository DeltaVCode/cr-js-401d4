var person = {
  name: 'Keith',
  children: [
    { name: 'T', },
    { name: 'F' },
  ],
  dob: '1900-01-01'
};
var name = null;

try {
  var lengthOfName = name && name.length;
  var anotherLength = name ? name.length : 0;
  console.log({ lengthOfName, anotherLength });

  console.log(person.children[3].name);
}
catch (error) {
  // if (can handle error) { do nothing }
  console.error('ERROR!', error);
  // throw error;
}
finally {
  console.log('finally!!');
}
