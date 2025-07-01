// components/ContactSection.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info Card */}
            <Card className="p-6 flex flex-col ">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Get in Touch</CardTitle>
                <CardDescription className="text-gray-600">
                  We&apos;d love to hear from you! Reach out via email, phone, or visit us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <span>📧</span>
                  <span>info@wonorejolawang.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span>📞</span>
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <span>📍</span>
                  <span>Jl. Raya Wonorejo, Lawang, Malang, Jawa Timur</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form Card */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Send Us a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" type="text" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your Email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject" type="text" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your Message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;