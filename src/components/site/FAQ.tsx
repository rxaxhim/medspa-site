import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 border-y">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        {/* Center the section content and widen on big screens */}
        <div className="mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2">
              Answers to the most common questions about treatments and booking.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you offer free consultations?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer complimentary consultations to discuss goals and plan treatments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
              <AccordionContent>
                We ask for 24 hours’ notice to reschedule or cancel without a fee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Are treatments safe for sensitive skin?</AccordionTrigger>
              <AccordionContent>
                We tailor protocols for each skin type and perform patch tests when appropriate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
