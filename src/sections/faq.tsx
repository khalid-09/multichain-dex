import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = () => {
  return (
    <div className="text-white bg-[#BBBBBB1A] rounded-lg divide-[##BBBBBB1A] divide-opacity-10 mx-auto max-w-[83.938rem]">
      <h2 className="text-[#E4B40D] text-center">FAQs</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQS;
