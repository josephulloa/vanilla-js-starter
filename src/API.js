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
  try {
    const response = await fetch("http://localhost:3000/api/task/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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

export async function updateData(id, task) {
  const response = await fetch("http://localhost:3000/api/task/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
}
