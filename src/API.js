export async function getTasks() {
  const response =  fetch("http://localhost:3000/api/task/");

  const tasks =  response.json();

   
  return tasks;
}

// export async function postData(url = "http://localhost:3000/api/task", task) {
//   const response = await fetch(url, {
//     method: "POST",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(task),
//   });
//   console.log(data);
//   return response.json();
// }

export async function postData(task) {
  const response = await fetch("http://localhost:3000/api/task/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}

async function getData(url = "http://localhost:3000/api/task/", data = {}) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

async function putData(
  url = "http://localhost:3000/api/task/<task_id>",
  data = {}
) {
  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
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
    body: JSON.stringify(id),
  });
  return response.json();
}

// export function PostM() {
//   fetch("http://localhost:3000/api/task", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({}),
//   })
//     .then((response) => response.json())
//     .then((data) => {})
//     .catch((error) => {});
// }

// const url = "http://localhost:3000/api/task" ;

// const Post = (method= "post", data) => ({
//     method : method,
//     mode: "cors",
//     cache: "no-cache",
//     Credentials: "same-origin",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//     body: JSON.stringify(data),

// });
