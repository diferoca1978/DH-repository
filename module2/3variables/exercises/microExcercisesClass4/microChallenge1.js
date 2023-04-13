//* User privileges

let profile = '';
let result = '';

if (profile === '') {
  console.log('You must specify a user profile.')
}else if (profile == 'administrator' || profile =='Administrator' || profile == 'ADMINISTRATOR') {
  result = ('you have all the privileges to use the system.');
}else if (profile == 'assistant' || profile == 'Assistant' || profile == 'ASSISTANT') {
  result = 'You only have privileges to register, to modify and consult data.';
}else if (profile.toLowerCase() == 'guest' || profile == 'Guest' || profile == 'GUEST') {
  result = 'You only have privileges to consult data.';
}else {
  result = 'You must specify a valid profile.'
}
console.log(result);
