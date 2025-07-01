import { Mail, MapPin, Phone } from "lucide-react";

interface ContactSectionProps {
  title?: string;
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
                    title = "Contact Us",
                    emailLabel = "Email",
                    emailDescription = "We respond to all emails within 24 hours.",
                    email = "example@shadcnblocks.com",
                    officeLabel = "Office",
                    officeDescription = "Drop by our office for a chat.",
                    officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
                    phoneLabel = "Phone",
                    phoneDescription = "We're available Mon-Fri, 9am-5pm.",
                    phone = "+123 456 7890",
                  }: ContactSectionProps) => {
  return (
      <section className="bg-background py-32">
        <div className="container mx-auto">
          <div className="mb-14">
            <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
              {title}
            </h1>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-primary text-white">
              <Mail className="h-6 w-auto" />
            </span>
              <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
              <p className="mb-3 text-muted-foreground">{emailDescription}</p>
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
              <p className="mb-3 text-muted-foreground">{officeDescription}</p>
              <a href="#" className="font-semibold hover:underline">
                {officeAddress}
              </a>
            </div>
            <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-primary text-white">
              <Phone className="h-6 w-auto" />
            </span>
              <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
              <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
              <a href={`tel:${phone}`} className="font-semibold hover:underline">
                {phone}
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection ;
