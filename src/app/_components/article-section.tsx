import React from 'react'
import { Star} from "lucide-react";
import Article from "@/components/global/article";
import SectionHeading from "@/components/global/section-heading";

const ArticleSection = () => {
  return (
      <div className={'container mx-auto'}>
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        <SectionHeading
            Icon={Star}
            title={"Artikel Tentang Wonorjo"}
        />

        <div className={'flex gap-4'}>

          <Article
              title={'Article 1'}
              description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores id iste laboriosam laudantium obcaecati odio, officia perferendis, quaerat quis saepe sapiente unde velit veritatis.'}
              image={'/images/article-image-1.png'}
              link={'/'}
          />
          <Article
              title={'Article 2'}
              description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores id iste laboriosam laudantium obcaecati odio, officia perferendis, quaerat quis saepe sapiente unde velit veritatis.'}
              image={'/images/article-image-2.png'}
              link={'/'}
          />

        </div>
      </div>)
}
export default ArticleSection
