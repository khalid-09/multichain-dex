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
    <div className="text-white bg-[#BBBBBB1A] rounded-lg w-[62.313rem] pb-12 my-36 mx-auto max-w-[83.938rem]">
      <h2 className="text-[#E4B40D] font-extrabold text-4xl p-6 pb-8 text-center">
        FAQs
      </h2>
      <Accordion
        type="single"
        collapsible
        className="border-t border-[#BBBBBB1A] px-18 space-y-3"
      >
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i + 1}
            value={`item-${i + 1}`}
            className="border-b border-[#BBBBBB1A] px-20"
          >
            <AccordionTrigger className="font-medium text-lg">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pb-10 text-[#BAB8B8] ">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
