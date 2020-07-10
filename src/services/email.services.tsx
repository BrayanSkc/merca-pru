import { configEnv } from "../config"

export const sendEmail = async (email: any, info: any) => {
  try {
    console.log(`${configEnv?.URLBACKEND}/mail`, email)
    return await fetch(`${configEnv?.URLBACKEND}/mail`, {
      method: "POST",
      body: JSON.stringify({ email: email, info: info }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(response => response.json())
  } catch (error) {
    console.log(error)
  }
}

export const sendInfoAsoc = async (info: any) => {
  try {
    console.log(JSON.stringify(info))
  } catch (error) {
    console.log(error)
  }
}
