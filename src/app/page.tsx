

export default function Home() {
  return (
    <div>
        It works now
        {
            [
                process.env.DB_USER,
                process.env.DB_PORT,
                process.env.DB_PASSWORD,
            ].map(variable => (
                console.log(variable)
            ))
        }
    </div>
  );
}
