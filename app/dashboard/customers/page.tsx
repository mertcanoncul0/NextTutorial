import Search from "@/app/ui/search"
import { CreateInvoice } from "@/app/ui/invoices/buttons"
import { lusitana } from "@/app/ui/fonts"
import { Suspense } from "react"
import { InvoicesTableSkeleton } from "@/app/ui/skeletons"
import CustomersTable from "@/app/ui/customers/table"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Invoices",
}

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  )
}
