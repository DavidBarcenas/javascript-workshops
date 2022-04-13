function greet(greeting, name) {
  return `${greeting}, ${name}`;
}

function curryGreet(greeting) {
  return function(name) {
    return `${greeting}, ${name}`;
  };
}

const greetInitials = curryGreet('Hello');
greetInitial('Davee') // Hello, Davee


function writeMessage(message, salutation, name) {
  return md`<p>
    ${message}
    ${salutation},
    ${name}
  </p>`
}

writeMessage(
  "You're a great person",
  "Keep curryin on",
  "Functional programmer"
)

const writeFriendlyNote = function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

writeFriendlyNote('Hey dog! Party at my place tonight, bring snacks!', 'See ya')

function makeSignature(salutation, name) {
  return message => writeMessage(message, salutation, name);
}

const writeLetter = makeSignature('Hey', 'Functional programmer');
writeLetter("You're a great person")