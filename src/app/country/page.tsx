import Link from "next/link";

export default function Page(){
    return(
        <div>
            <ul>
                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <li><Link href="/country/india">India</Link></li>   
                <li><Link href="/country/china">China</Link></li>   
                <li><Link href="/country/japan">Japan</Link></li>   
                <li><Link href="/country/bangladesh">Bangladesh</Link></li>    
            </ul>
        </div>
    );
}