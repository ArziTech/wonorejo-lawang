// components/FAQSection.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Using shadcn Accordion

interface FAQItem {
  question: string;
  answer: string;
  value: string; // Unique value for AccordionItem
}

const faqData: FAQItem[] = [
  {
    question: "What is Wonorejo Lawang?",
    answer: "Wonorejo Lawang is a beautiful village known for its stunning natural landscapes, rich local culture, and fresh produce, especially avocados.",
    value: "item-1",
  },
  {
    question: "How can I visit Wonorejo Lawang?",
    answer: "You can reach Wonorejo Lawang by private vehicle or public transport from Malang. We recommend checking local guides for the best routes and accommodations.",
    value: "item-2",
  },
  {
    question: "What activities can I do there?",
    answer: "Visitors can enjoy trekking, exploring avocado plantations, experiencing traditional village life, and tasting local delicacies. Guided tours are often available.",
    value: "item-3",
  },
  {
    question: "Is there accommodation available?",
    answer: "While we don't directly offer accommodation, there are several guesthouses and homestays in and around Wonorejo Lawang. We can provide recommendations upon request.",
    value: "item-4",
  },
];

const FAQSection = () => {
  return (
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqData.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-lg text-gray-800 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
  );
};

export default FAQSection;