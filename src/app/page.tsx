

export default function Home() {

    [
        process.env.DB_USER,
        process.env.DB_PORT,
        process.env.DB_PASSWORD,
    ].map(variable => (
        console.log(variable)
    ))

  return (
    <div>
        It works now
    </div>
  );
}
