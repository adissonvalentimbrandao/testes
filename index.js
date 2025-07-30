function fetchData(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.exampsadale.com/data");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    } else {
      console.error("Erro na requisição");
    }
  };
  xhr.send();
}
