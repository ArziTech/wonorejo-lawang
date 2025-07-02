import React, {ForwardRefExoticComponent, RefAttributes} from 'react'
import {LucideProps} from "lucide-react";
import {cn} from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  Icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
}
const SectionHeading = ({Icon, title, className}:Props) => {
  return (
      <div className={cn('flex py-4 gap-4 items-center', className)}>
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
