"use server"
import { redirect } from "next/navigation";

export async function postData(formData: FormData) {
  console.log("name", formData.get("name"))
  console.log("email", formData.get("email"))
  console.log(formData)
  redirect("/posts")
}
