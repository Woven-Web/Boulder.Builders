
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Join the Community',
      description: 'Sign in with GitHub and agree to our Code of Conduct to become a Community member.',
      color: 'bg-boulder-sky-50 border-boulder-sky-100 text-boulder-sky-600'
    },
    {
      number: '02',
      title: 'Explore & Discuss Problems',
      description: 'Browse existing problems or propose new challenges facing Boulder.',
      color: 'bg-boulder-coral-50 border-boulder-coral-100 text-boulder-coral-600'
    },
    {
      number: '03',
      title: 'Contribute Ideas & Solutions',
      description: 'Share research, designs, or experiences to help solve problems.',
      color: 'bg-boulder-green-50 border-boulder-green-100 text-boulder-green-600'
    },
    {
      number: '04',
      title: 'Collaborate on Projects',
      description: 'Turn ideas into action by joining project teams and building solutions together.',
      color: 'bg-boulder-teal-50 border-boulder-teal-100 text-boulder-teal-600'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How Boulder.Builders Works</h2>
          <p className="text-boulder-stone-600">
            Our platform connects people with problems and projects in Boulder through a simple, collaborative process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-6 mb-12">
              <div className={`${step.color} flex-shrink-0 w-14 h-14 rounded-full border flex items-center justify-center font-heading font-bold text-lg`}>
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-boulder-stone-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-12 border-l-2 border-dashed border-boulder-stone-200 ml-7 mt-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
            <Link to="/about">
              Learn More About Our Process <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
