function abbrevName(name){
  return name.split(" ").map(x=>x[0].toUpperCase()).join(".")
}

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
