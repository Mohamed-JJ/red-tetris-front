export default function PlayerPage({ params }) {
  const { room, playername } = params
  
  return (
    <div>
      <h1>Welcome to Room: {room}</h1>
      <p>Player: {playername}</p>
    </div>
  )
}

// Optional: Generate metadata dynamically
// export async function generateMetadata({ params }) {
//   return {
//     title: `${params.playername} in ${params.room}`,
//   }
// }