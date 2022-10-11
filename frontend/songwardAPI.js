const API_URL = "https://songward-api.herokuapp.com"

export async function GetUserData(user_id) {
  const response = await fetch(API_URL + "/userDetails/" + user_id, {
    method: "GET",
  })
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
  }

export async function GetUserReminders(user_id) {
  const response = await fetch( API_URL + "/userReminders/" + user_id, {
    method: "GET",
  })
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
}

export async function DeleteUserReminder(user_id, reminder_id) {
  const response = await fetch(API_URL + "/userReminders/" + user_id + "/" + reminder_id, {
    method: "DELETE",
  })
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
}

export async function AddUserReminder(user_id, reminder) {
    const response = await fetch(API_URL + "/userReminders/" + user_id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reminder),
    })
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status)
    }
}

export async function UpdateUserReminder(user_id, reminder) {
  const response = await fetch(API_URL + "/userReminders/" + user_id + "/" + reminder._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reminder),
  })
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
}

export async function AddJournalEntry(user_id, journal_entry) {
  const response = await fetch(API_URL + "/userJournal/" + user_id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(journal_entry),
  })
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
}