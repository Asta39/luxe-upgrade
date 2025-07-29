import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      question: "How far in advance should I book your services?",
      answer: `We recommend booking our services 6-12 months in advance for weddings, especially during peak season (December-February and June-August). For corporate events and private celebrations, 2-3 months advance booking is typically sufficient.\n\nHowever, we understand that sometimes events come up with shorter notice, and we'll do our best to accommodate urgent requests based on availability.`
    },
    {
      question: "What\'s included in your wedding planning packages?",
      answer: `Our wedding planning packages include:\n• Initial consultation and venue selection\n• Vendor coordination and management\n• Timeline creation and day-of coordination\n• Budget planning and tracking\n• Design consultation and styling\n• Guest management and RSVP tracking\n• Emergency day-of support\n\nSpecific inclusions vary by package tier. We'll provide detailed information during your consultation.`
    },
    {
      question: "Do you provide catering services or work with external caterers?",
      answer: `We specialize in catering coordination rather than direct catering services. We work with a curated network of premium caterers and can recommend options that match your budget, dietary requirements, and event style.\n\nWe handle all coordination with your chosen caterer, including menu planning, tasting sessions, and day-of service management.`
    },
    {
      question: "What are your payment terms and cancellation policy?",
      answer: `Payment Terms:\n• 30% deposit to secure your date\n• 50% due 30 days before the event\n• Final 20% due on the event day\n\nCancellation Policy:\n• 90+ days: Full refund minus 10% processing fee\n• 30-89 days: 50% refund\n• Less than 30 days: No refund, but credit toward future event\n\nWe accept bank transfers, mobile money, and major credit cards.`
    },
    {
      question: "Can you work within my budget constraints?",
      answer: `Absolutely! We work with various budget ranges and pride ourselves on maximizing value regardless of budget size. During our initial consultation, we'll discuss your budget openly and create a plan that delivers the best possible experience within your means.\n\nWe can also suggest cost-effective alternatives and prioritize elements that matter most to you.`
    },
    {
      question: "Do you handle destination weddings or events outside Nairobi?",
      answer: `Yes, we handle destination weddings and events throughout Kenya and select international locations. Additional travel and accommodation costs apply for events outside Nairobi.\n\nWe have experience with coastal weddings in Mombasa, safari-themed events in Maasai Mara, and mountain celebrations in Mount Kenya region.`
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 elevation-card">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-muted-foreground">
          Get quick answers to common questions about our services and process.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-smooth"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth"
              aria-expanded={openItems.has(index)}
            >
              <h3 className="font-body font-semibold text-foreground pr-4">
                {item.question}
              </h3>
              <Icon
                name="ChevronDown"
                size={20}
                className={`text-muted-foreground transition-smooth flex-shrink-0 ${
                  openItems.has(index) ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {openItems.has(index) && (
              <div className="px-6 pb-4 border-t border-border bg-muted/20">
                <p className="font-body text-muted-foreground whitespace-pre-line pt-4">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
        <Icon name="HelpCircle" size={32} className="text-primary mx-auto mb-4" />
        <h3 className="font-heading text-lg font-bold text-foreground mb-2">
          Still Have Questions?
        </h3>
        <p className="font-body text-muted-foreground mb-4">
          Can't find what you're looking for? Our team is here to help with any specific questions about your event.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:0727937010"
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth hover-scale"
          >
            <Icon name="Phone" size={18} />
            <span className="font-body font-medium">Call Us</span>
          </a>
          <a
            href="https://wa.me/0727937010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-success text-success-foreground rounded-lg hover:bg-success/90 transition-smooth hover-scale"
          >
            <Icon name="MessageCircle" size={18} />
            <span className="font-body font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;