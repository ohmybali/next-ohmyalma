import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";

type ChildProps = {
  id: string,
  img: any,
  body: any,
}

function AboutUs({ id, img, body}: ChildProps){
  return(
    <section className="bg-(--color-secondary)/80 rounded-t-2xl" id="aboutUs">
      <div className="container max-w-7xl mx-auto py-16 px-16">
        <div className={`flex items-stretch flex-col gap-8 md:flex-row`}>
          <div className="flex-1 py-4">
            <h1 className="text-3xl">{id}</h1>
            {Array.isArray(body) && <PortableText value={body} />}
          </div>
          <div className="flex-1 relative min-h-80">
            <Image
              src={urlFor(img).url()}
              alt={img.alt || id}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;