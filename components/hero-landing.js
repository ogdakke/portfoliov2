export default function HeroLanding() {
    return (
    <>
        <h3 className="text-3xl pb-10">
        I'm a aspiring developer and designer from Finland 🇫🇮 with a passion for beautiful, fast and simple websites. 
        </h3>

        <h3 className="text-2xl"> Currently doing:</h3> <h4 className="text-2xl text-accent-4 leading-relaxed" >🏫University: Studying Information Systems.</h4>
        <h4 className="text-2xl text-accent-4" >🧠Learning: React, backend development.</h4>

        <div className="py-8 flex justify-center align-middle animate-pulse-slow">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38 26L24 40L10 26M38 10L24 24L10 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
    </>
    )
}