// export default function BgVideo() {
//   return (
//     <>
//       <main className="relative text-white text-center pb-18">
//         <div className="relative h-screen">
//           <video
//             className="absolute inset-0 w-full h-full object-cover"
//             src="/pokervideo/Mesmerizing Poker Ambiance_ Dark & Intense (online-video-cutter.com).mp4"
//             autoPlay
//             loop
//             muted
//           />
//           <div
//             className="absolute inset-0 pointer-events-none text-center flex justify-center items-center"
//             style={{
//               background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
//             }}
//           >
//             <h1 style={{fontSize:'2rem',padding:'50px'}}>Whether you're looking to sharpen your skills, compete in tournaments, or simply enjoy the thrill of the game, [Your Poker Website Name] is your go-to destination. Join our community of poker enthusiasts and start playing today!</h1>

//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

export default function BgVideo() {
  return (
    <>
      <main className="relative text-white text-center pb-18">
        <div className="relative h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/pokervideo/Mesmerizing Poker Ambiance_ Dark & Intense (online-video-cutter.com).mp4"
            autoPlay
            loop
            muted
          />
          <div
            className="absolute inset-0 pointer-events-none text-center flex justify-center items-center"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
            }}
          >
            <h1 style={{ fontSize: "2rem", padding: "50px" }}>
              Whether youre looking to sharpen your skills, compete in
              tournaments, or simply enjoy the thrill of the game, [Your Poker
              Website Name] is your go-to destination. Join our community of
              poker enthusiasts and start playing today!
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
