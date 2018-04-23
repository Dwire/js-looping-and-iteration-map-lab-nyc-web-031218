// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(name => name.toLowerCase())
}

function nameToAttributes (arr) {
  return arr.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(arr) {
  return arr.map(driver => `${driver.name} is from ${driver.hometown}`)
}
