import React from 'react'
import ContactSection from "@/app/_components/contact-section";

const Page = () => {
  return (
      <main className={'flex-grow'}>
        <ContactSection />
        {/*<section className="py-32">*/}
        {/*  <div className="container mx-auto">*/}
        {/*    <div*/}
        {/*        className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">*/}
        {/*      <h1 className="text-5xl font-semibold">Ikuti Kami</h1>*/}
        {/*      <p className="text-muted-foreground">Pada sosial media resmi Desa Wonorejo</p>*/}
        {/*    </div>*/}
        {/*    <div className="grid gap-7 lg:grid-cols-3">*/}
        {/*      <Instagram*/}
        {/*           className="size-full max-h-[620px]  object-cover lg:col-span-2"/>*/}
        {/*      <div className="flex flex-col gap-7 md:flex-row lg:flex-col">*/}
        {/*        <div*/}
        {/*            className="flex flex-col justify-between gap-6  bg-muted p-7 md:w-1/2 lg:w-auto">*/}
        {/*          <Facebook*/}
        {/*               className="mr-auto h-12"/>*/}
        {/*          <div>*/}
        {/*            <p className="mb-2 text-lg font-semibold">Facebook</p>*/}
        {/*            <p className="text-muted-foreground">Nama facebook desa wonorejo</p>*/}
        {/*          </div>*/}
        {/*          <Button variant="outline" className="mr-auto" asChild>*/}
        {/*            <Link href='/' target="_blank">*/}
        {/*              Menuju ke facebook*/}
        {/*            </Link>*/}
        {/*          </Button>*/}
        {/*        </div>*/}
        {/*        <Mailbox*/}
        {/*             className="grow basis-0  object-cover md:w-1/2 lg:min-h-0 lg:w-auto"/>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>
  )
}
export default Page
