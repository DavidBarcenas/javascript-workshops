let user = {name: 'Davee', age: 25};

// AVOID side effects ❌
function changeName(user) {
  user.name = 'Dave';
  console.log('Renamed!')
}

changeName('Arturo') // Renamed!
user; // {name: 'Arturo', age: 25}


// no side effects ✅
function changeUserName(oldUser, newName) {
  return {...oldUser, name: newName};
}

const user2 = changeUserName(user, 'Arturo');
user; // {name: 'Davee', age: 25}
user2; // {name: 'Arturo', age: 25}