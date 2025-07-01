import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image'
interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Article = ({title, description, link, image}:Props) => {
  return (
      <div className={'w-1/2 flex '}>
        <div className={''}>
          <h3 className={'text-xl font-semibold'}>{title}</h3>
          <p>{description}</p>
          <Button variant={'link'} asChild className={'px-0 text-gray-600'}>
            <Link href={link} className={ ' bg-'}>Baca Selengkapnya</Link>
          </Button>
        </div>
        <Image
            src={image}
            alt={link}
            width={400}
            height={40}
        />
      </div>
  )
}
export default Article
