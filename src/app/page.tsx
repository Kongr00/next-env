

export default function Home() {



    function printEnvs() {
        [
            process.env.DB_USER,
            process.env.DB_PORT,
            process.env.DB_PASSWORD,
        ].map(variable => (
            console.log(variable)
        ))
    }

    printEnvs()

  return (
    <div>
        It works now
    </div>
  );
}
