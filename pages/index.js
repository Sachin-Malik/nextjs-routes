import Link from "next/link";
import {useRouter} from "next/router";

function Home(){
  const router = useRouter();
  const handleClick=()=>{
      router.push('/product')
  }
  return (
      <div>
            <h1>Home</h1>
            <Link href="/blog"><a>Visit Blog</a></Link>
            <button type="button" onClick={handleClick}>Buy Product</button>
      </div>
  )
}
export default Home;