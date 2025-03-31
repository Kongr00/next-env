

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


  return (
    <div>
        It works now

        <button onClick={printEnvs}>PRINT</button>
    </div>
  );
}
