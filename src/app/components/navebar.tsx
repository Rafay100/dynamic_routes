import Link from "next/link";

export default function Page(){
    return(
        <>
        <Link href="/Home">Home</Link>&nbsp;|&nbsp;&nbsp;|&nbsp;
        <Link href="/aboutus">About us</Link>&nbsp;|&nbsp;&nbsp;|&nbsp;
        <Link href="/contactus">Contact us</Link>&nbsp;|&nbsp;&nbsp;|&nbsp;
        <Link href="/country">Country</Link>&nbsp;|&nbsp;&nbsp;|&nbsp;
        <Link href="/feedback">Feedback</Link>
        </>
    );
}