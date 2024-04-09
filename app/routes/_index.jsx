import { Link } from "@remix-run/react";
import home from  "~/styles/home.css";

export default function Index() {
  return (
 <main id="content">
<h1>A better way of keeping track of yours notes again!</h1>
<p>
  Try our early beta and never loose of yours notes again!
</p>
<p id="cta">
  <Link to="/notes">Try Now!</Link>
</p>
 </main>
  )
}
export function links(){
  return[{rel:'stylesheet', href:home}];
}