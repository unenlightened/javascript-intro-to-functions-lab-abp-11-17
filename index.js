function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(shout(string));
  return string;
}

function logWhisper(string){
  console.log(whisper(string));
  return string;
}
