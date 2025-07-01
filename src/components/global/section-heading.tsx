import React, {ForwardRefExoticComponent, RefAttributes} from 'react'
import {LucideProps} from "lucide-react";

interface Props {
  title: string
  Icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}
const SectionHeading = ({Icon, title}:Props) => {
  return (
      <div className={'flex pb-4 gap-4 items-center'}>
        <div className={'bg-primary size-fit rounded-full aspect-square  p-2'}>
          <Icon className={'text-white'}/>
        </div>
        <h2 className={'font-bold text-2xl'}>
          {title}
        </h2>
      </div>
  )
}
export default SectionHeading
