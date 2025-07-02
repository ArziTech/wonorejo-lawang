import {Instagram, Mail, MapPin, Phone} from "lucide-react";
import SectionHeading from "@/components/global/section-heading";
import Link from "next/link";

interface ContactSectionProps {
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
}

const ContactSection = ({
                    emailLabel = "Email",
                    email = "wonorejo.lawang@malangkab.go.id",
                    officeLabel = "Office",
                    phoneLabel = "Instagram",
                    phone = "desawonorejolawang",
                  }: ContactSectionProps) => {
  return (
      <section className="bg-background py-32">
        <div className="container mx-auto">
          <SectionHeading
              Icon={Phone}
              title={'Kontak Kami'}
              className={'mb-12'}
          />
          <div className="grid gap-10 md:grid-cols-3">
            <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-primary text-white">
              <Mail className="h-6 w-auto" />
            </span>
              <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
              <a
                  href={`mailto:${email}`}
                  className="font-semibold hover:underline"
              >
                {email}
              </a>
            </div>
            <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-primary text-white">
              <MapPin className="h-6 w-auto" />
            </span>
              <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
              <Link href="https://maps.app.goo.gl/MdJf84A6FjUTSt7e8" className="font-semibold hover:underline">
                Jl. Raya Wonorejo No.4, Krajan Tengah, Wonorejo, Kec. Lawang, Kabupaten Malang, Jawa Timur 65251
              </Link>
            </div>
            <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-primary text-white">
              <Instagram className="h-6 w-auto text-white" />

            </span>
              <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
              <Link href={`https://www.instagram.com/desawonorejolawang`}
                 className="font-semibold hover:underline">
                @{phone}
              </Link>
            </div>
          </div>
        </div>
      </section>);
};

export default ContactSection;
