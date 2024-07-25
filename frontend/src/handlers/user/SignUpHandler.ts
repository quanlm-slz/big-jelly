import { SignUpRequest } from "@/queries/userRequests"
import { FormEventHandler } from "react"

const handler: FormEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault()
  
  const formData = new FormData(event.currentTarget)
  await SignUpRequest(formData)
}

export default handler
