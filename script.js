// 30. Create "OBJECT" for storing "functions and variable" necessary to enable the API

let weather = {
  // 31.1 Need API key to access the weather
  // 31.2 Go to weatherapimap.org, create account, and
  // 31.3 Go to API keys and copy it here  under `apiKeys:`
  apiKey: "e0e09750f52faa72ead259c3bdf495f6",
  // 32.1 See the API Current Weather Docs ->https://openweathermap.org/current#name
  // 32. 2 See "Built-in API request by city name"
  // 32.2.1 @ parameters -> `city name` and `API key`
  // 32.3 API URL from 32.1 under 32.2 "Built-in API request by city name""==> https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}
  // * 33.1 Replace parameters {city%20name} and {API%20key}==>`https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=e0e09750f52faa72ead259c3bdf495f6`
  // ! 33.2 ERROR when pasted in Browser URL ==> msg `-{"cod":401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}>`
  // 33.2.1 It will take 30-60min  (1 hour) to process the new created
  // 33.2.1 Get JSON Viewer Extension for browser to see
  // 34.1 Add `units` into the API call URL as, units=metric
    // 34.2
};
