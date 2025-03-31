'use client'
export default function ArticlesPage() {

    [
        process.env.DB_USER,
        process.env.NEXT_PUBLIC_DB_PASSWORD,
    ].map(variable => (
        console.log(variable)
    ))

    return (
        <div>
            It works now
        </div>
    );
}
