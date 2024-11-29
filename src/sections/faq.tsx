import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How do i get Referral Code?',
    a: 'You can get your referral code by signing up on our platform and going to the referral section.',
  },
  {
    q: 'Do i get rewarded in tokens or ETH when I refer buyers?',
    a: 'You receive your rewards in ETH instantly once someone you refer makes a transaction!',
  },
  {
    q: 'How do i get Referral Code?',
    a: 'You can get your referral code by signing up on our platform and going to the referral section.',
  },
];

const FAQS = () => {
  return (
    <section className="text-white bg-[#BBBBBB1A] rounded-lg mx-2 font-raleway md:mx-auto md:w-[62.313rem] pb-12 my-36 max-w-[83.938rem]">
      <h2 className="text-[#E4B40D] font-extrabold text-3xl md:text-4xl p-4 md:p-6 pb-6 md:pb-8 text-center">
        FAQs
      </h2>
      <Accordion
        type="single"
        collapsible
        className="border-t border-[#BBBBBB1A] border-opacity-10 space-y-2 md:space-y-3"
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i + 1}
            value={`item-${i + 1}`}
            className="border-b border-opacity-10 border-[#BBBBBB1A] px-4 md:px-8 lg:px-20"
          >
            <AccordionTrigger className="font-medium text-base md:text-lg py-4 text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 md:pb-10 text-[#BAB8B8] text-sm md:text-base">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQS;
