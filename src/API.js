export async function getTasks() {
  const response = await fetch("http://localhost:3000/api/task/");
  const tasks = await response.json();
  return tasks;
}

export async function postData(task) {
  const response = await fetch("http://localhost:3000/api/task/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
}

export async function getData() {
	const response = await fetch(
		'http://localhost:3000/api/task/',
		{
			method: 'GET',
			headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
			}
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
  return await data
}

export async function deleteData(id) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return await response.json();
}



// async function putData(
//   url = "http://localhost:3000/api/task/<task_id>",
//   data = {}
// ) {
//   const response = await fetch(url, {
//     method: "PUT",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }
