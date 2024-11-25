import { customer } from'@/sanity/lib/customer'
import { map } from 'sanity/migrate';

interface datatype{
  name:string,
  price : number
}


async function getData(){
  const query = `*[_type == "product"]{
name,
   price,
}`
const data = await customer.fetch(query);
return data;
}

export default async function Home() {
//   async function getData() {
//     const query = `*[_type=='heroImage'][0]`
//     const data = await client.fetch(query)
//     return data;
// }

const karachi:datatype[] = await getData();


  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hi, piyari chandaaaaaaaaaa</h1>
      {karachi.map((chanda)=>{
        return(<>
      <h2>{chanda.name}</h2>    
      <h2>{chanda.price}</h2>    
        </>
        )
      })}
    </main>
  );
}
