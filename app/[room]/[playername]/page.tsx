"use client"

import { useParams, useRouter } from "next/navigation"

export default function PlayerPage() {
    const router = useRouter()
    const params = useParams()
    
  return (
    <div className="text-white">
      hello there {params.playername} {params.room}
    </div>
  )
}

// // Optional: Generate metadata dynamically
// export async function generateMetadata({ params }) {
//   return {
//     title: `${params.playername} in ${params.room}`,
//   }
// }