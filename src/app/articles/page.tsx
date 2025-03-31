'use client'
export default function ArticlesPage() {
    return (
        <div>
            It works now
            {
                [
                    process.env.DB_USER,
                    process.env.NEXT_PUBLIC_DB_PASSWORD,
                ].map(variable => (
                    console.log(variable)
                ))
            }
        </div>
    );
}
