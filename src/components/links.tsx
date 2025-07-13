import { urls } from "@/constants/urls";
import Link from "next/link";

export default function LinksGlobal() {
    return (
        <div className="col-4 d-flex gap-3">
            <Link href={urls.linkedin} target="_blank"><i className="bi bi-linkedin"></i></Link>
            <Link href={urls.github} target="_blank"><i className="bi bi-github"></i></Link>
            <Link href={urls.whatsapp} target="_blank"><i className="bi bi-whatsapp"></i></Link>
        </div>)
}