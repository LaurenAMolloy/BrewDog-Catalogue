import { useLoaderData } from "react-router"
import type { DetailsLoaderResult } from './detailsLoader'


export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult
  console.log(details);

  return (
    <div>{details.id}</div>
  )
}
