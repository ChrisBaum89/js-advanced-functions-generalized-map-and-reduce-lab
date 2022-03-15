// Add your functions here

function map (sourceArray, callback){
  const map1 = sourceArray.map(callback)
  return map1
}

function reduce (sourceArray, callback, initialValue){
  let reduce1
  if (Number.isInteger(initialValue)){
    reduce1 = sourceArray.reduce((previousValue, currentValue) => callback(previousValue, currentValue), initialValue)
  }
  else {
    reduce1 = sourceArray.reduce((previousValue, currentValue) => callback(previousValue, currentValue))
  }

  return reduce1
}
