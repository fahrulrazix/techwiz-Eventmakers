import { Button } from '@nextui-org/react';
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";


export default function Page() {
  //get cookie from browser
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  //decode token
  const payload = verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)

  return (

    <div>
      <header>
        <nav>
          <div>
            <div>{payload.name}</div>
            <Button>Logout</Button>
            
          </div>
        </nav>
      </header>
    </div>
  )
}

