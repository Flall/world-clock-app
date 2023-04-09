function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, MMMM D YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");
  }

  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    let romeTime = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = romeTime.format("dddd, MMMM D YYYY");
    romeTimeElement.innerHTML = romeTime.format("HH:mm:ss");
  }

  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");

    singaporeDateElement.innerHTML = singaporeTime.format("dddd, MMMM D YYYY");
    singaporeTimeElement.innerHTML = singaporeTime.format("HH:mm:ss");
  }

  let elSalvadorElement = document.querySelector("#el-salvador");
  if (elSalvadorElement) {
    let elSalvadorDateElement = elSalvadorElement.querySelector(".date");
    let elSalvadorTimeElement = elSalvadorElement.querySelector(".time");
    let elSalvatoreTime = moment().tz("America/El_Salvador");

    elSalvadorDateElement.innerHTML =
      elSalvatoreTime.format("dddd, MMMM D YYYY");
    elSalvadorTimeElement.innerHTML = elSalvatoreTime.format("HH:mm:ss");
  }

  let kathmanduElement = document.querySelector("#kathmandu");
  if (kathmanduElement) {
    let kathmanduDateElement = kathmanduElement.querySelector(".date");
    let kathmanduTimeElement = kathmanduElement.querySelector(".time");
    let kathmanduTime = moment().tz("Asia/Kathmandu");

    kathmanduDateElement.innerHTML = kathmanduTime.format("dddd, MMMM D YYYY");
    kathmanduTimeElement.innerHTML = kathmanduTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  clearInterval(idInterval);
  idInterval = setInterval(setCityTime, 1000, cityName, cityTimeZone);
}

function setCityTime(cityName, cityTimeZone) {
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM D YYYY")}</div>
          </div>
            <div class="time">${cityTime.format(
              "HH:mm:ss"
            )} <small><i class="fa-regular fa-clock d-none d-md-block"></i></small></div>

             </br>
        </br>
    <a href="index.html">Back</a>
    </br>
    </br> `;
}

updateTime();
let idInterval = setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
