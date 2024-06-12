import { createLazyFileRoute } from '@tanstack/react-router'
import { Payment, columns } from "../../components/columns"
import { DataTable } from "../../components/data-table"
 function getData(): Payment[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}


// import { CheckIcon } from '@heroicons/react/20/solid'

// const includedFeatures = [
//   'Private forum access',
//   'Member resources',
//   'Entry to annual conference',
//   'Official member t-shirt',
// ]
export const Route = createLazyFileRoute('/payments')({
  component: Payments,
  
})

function  Payments () {
 const data =  getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
      <p>hi there</p>
    </div>
  )
}