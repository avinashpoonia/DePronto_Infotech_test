url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((objectdata) => {
    console.log(objectdata);
    let tableData = `<tr>
                <th>userId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
            </tr>`;
    objectdata.map((values) => {
      tableData += `<tr>
            <td>${values.userId} </td>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.completed}</td>
          </tr>`;
    });
    document.getElementById("todos").innerHTML = tableData;
  });
