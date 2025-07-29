import React from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = ({ expandedFaq, toggleFaq }) => {
  const faqs = [
    {
      question: 'What services does Luxe & Allure offer?',
      answer: 'We offer comprehensive event planning services including Wedding Planning, Corporate Events, Private Celebrations, Entertainment Planning, and Catering Coordination. Each service is tailored to meet your specific needs and vision.'
    },
    {
      question: 'How far in advance should I book your services?',
      answer: 'We recommend booking 6-12 months in advance for weddings and major events, though we can accommodate shorter timelines depending on availability. Corporate events can typically be planned with 2-3 months notice.'
    },
    {
      question: 'Do you provide customized packages?',
      answer: 'Absolutely! Every event is unique, and we create customized packages based on your specific requirements, budget, and vision. We believe in flexible planning that adapts to your needs.'
    },
    {
      question: 'What is included in your planning packages?',
      answer: 'Our packages include initial consultation, event design and planning, vendor coordination, timeline management, day-of coordination, and post-event follow-up. Specific inclusions vary by package level.'
    },
    {
      question: 'Do you handle vendor coordination?',
      answer: 'Yes, we work with a network of trusted vendors including caterers, photographers, florists, entertainers, and venue providers. We handle all vendor communications and coordination on your behalf.'
    },
    {
      question: 'How do you handle budget management?',
      answer: 'We work closely with you to establish a realistic budget and provide transparent pricing throughout the planning process. We help maximize your budget while achieving your vision and provide regular budget updates.'
    },
    {
      question: 'What happens if there are changes to the plan?',
      answer: 'We understand that plans can change. We maintain flexibility throughout the planning process and will work with you to accommodate changes while keeping you informed of any impact on timeline or budget.'
    },
    {
      question: 'Do you provide day-of coordination services?',
      answer: 'Yes, day-of coordination is included in all our packages. Our team will be present to ensure everything runs smoothly, allowing you to enjoy your special day without stress.'
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-foreground/80 text-lg max-w-2xl mx-auto font-body">
          Find answers to common questions about our services, planning process, and what to expect when working with us.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glassmorphic rounded-xl elevation-card overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-background/5 transition-smooth"
              >
                <h3 className="font-heading font-semibold text-lg text-foreground pr-4">
                  {faq.question}
                </h3>
                <Icon 
                  name={expandedFaq === index ? "ChevronUp" : "ChevronDown"} 
                  size={24} 
                  className="text-accent flex-shrink-0" 
                />
              </button>
              
              {expandedFaq === index && (
                <div className="px-6 pb-6 border-t border-foreground/10">
                  <p className="text-foreground/80 leading-relaxed font-body pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center glassmorphic p-8 rounded-xl elevation-card">
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-foreground/80 mb-6 font-body">
            We're here to help! Contact us directly and we'll be happy to answer any additional questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-smooth font-body"
            >
              <Icon name="MessageSquare" size={20} />
              <span>Send us a message</span>
            </a>
            <div className="hidden sm:block w-px h-6 bg-foreground/20"></div>
            <a
              href="tel:0727937010"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-smooth font-body"
            >
              <Icon name="Phone" size={20} />
              <span>Call us directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;