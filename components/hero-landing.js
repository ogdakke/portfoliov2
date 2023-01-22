export default function HeroLanding() {
    return (
    <>
        <h3 className="text-3xl py-20 md:pb-64 break-words">
        Web developer and designer with a passion for beautiful, fast and simple websites. <br/> I create visually pleasing experiences with a precise touch. 
        </h3>

        <h4 className="text-xl"> Currently doing:</h4> <h4 className="text-xl dark:text-accent-4 text-accent-2 leading-relaxed" >🏫University: Studying Information Systems.</h4>
        <h4 className="text-xl text-accent-2 dark:text-accent-4" >🧠Learning: React, backend development.</h4>

        <div className="pt-8 flex justify-center align-middle animate-pulse-slow dark:stroke-accent-3 stroke-accent-2">
        <svg aria-label="arrows pointing downwards" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 26L24 40L10 26M38 10L24 24L10 10" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
    </>
    )
}