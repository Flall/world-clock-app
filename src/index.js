function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM D YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTime = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTime.format("dddd, MMMM D YYYY");
  romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");

  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("dddd, MMMM D YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let elSalvadorElement = document.querySelector("#el-salvador");
  let elSalvadorDateElement = elSalvadorElement.querySelector(".date");
  let elSalvadorTimeElement = elSalvadorElement.querySelector(".time");
  let elSalvatoreTime = moment().tz("America/El_Salvador");

  elSalvadorDateElement.innerHTML = elSalvatoreTime.format("dddd, MMMM D YYYY");
  elSalvadorTimeElement.innerHTML = elSalvatoreTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let kathmanduElement = document.querySelector("#kathmandu");
  let kathmanduDateElement = kathmanduElement.querySelector(".date");
  let kathmanduTimeElement = kathmanduElement.querySelector(".time");
  let kathmanduTime = moment().tz("Asia/Kathmandu");

  kathmanduDateElement.innerHTML = kathmanduTime.format("dddd, MMMM D YYYY");
  kathmanduTimeElement.innerHTML = kathmanduTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
