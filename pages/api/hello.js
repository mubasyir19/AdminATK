// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

// const baseUrl = process.env.NEXT_API
const baseUrl = 'https://mocki.io/v1/5b27db5f-1588-4176-856f-ea2ebc2e7938'
export const getAccount = async () => {
  const acc = await axios.get(`${baseUrl}`)
  // console.log({data:acc})
  return acc.data
}

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
