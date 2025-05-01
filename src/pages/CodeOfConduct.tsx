
import Layout from "@/components/Layout";

const CodeOfConduct = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Code of Conduct</h1>
            <p className="text-boulder-stone-600">
              Our community guidelines for participation in the Boulder.Builders platform.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-stone">
            <h2>Our Commitment</h2>
            <p>
              Boulder.Builders is committed to providing a welcoming and inclusive space for all community members. 
              We aim to foster a collaborative environment where diverse perspectives are valued and 
              where everyone can contribute to building a better Boulder.
            </p>
            
            <h2>Expected Behavior</h2>
            <ul>
              <li>Treat all community members with respect and kindness</li>
              <li>Focus on the issue, not the person</li>
              <li>Engage constructively with differing viewpoints</li>
              <li>Provide evidence and reasoning for your positions</li>
              <li>Give credit to others for their contributions and ideas</li>
              <li>Be curious and open to learning</li>
              <li>Accept responsibility for mistakes and be willing to learn from them</li>
            </ul>
            
            <h2>Unacceptable Behavior</h2>
            <p>The following behaviors will not be tolerated:</p>
            <ul>
              <li>Personal attacks or derogatory comments</li>
              <li>Harassment of any form</li>
              <li>Discrimination based on race, gender, sexual orientation, disability, age, religion, or other personal attributes</li>
              <li>Inappropriate or offensive language</li>
              <li>Trolling, spamming, or deliberately disruptive behavior</li>
              <li>Posting others' private information without permission</li>
              <li>Any behavior that creates an unwelcoming environment for other community members</li>
            </ul>
            
            <h2>Community-Specific Guidelines</h2>
            <h3>Discussing Local Problems</h3>
            <p>
              When discussing local problems and challenges:
            </p>
            <ul>
              <li>Focus on systemic issues rather than blaming individuals</li>
              <li>Provide specific, actionable information when possible</li>
              <li>Consider multiple perspectives and lived experiences</li>
              <li>Recognize that complex issues rarely have simple solutions</li>
            </ul>
            
            <h3>Contributing Solutions</h3>
            <p>
              When contributing ideas, research, designs, or other work:
            </p>
            <ul>
              <li>Be clear about the scope and limitations of your contribution</li>
              <li>Be open to feedback and improvement suggestions</li>
              <li>Understand that all contributions to Problem spaces are shared under an open license</li>
              <li>Acknowledge others whose work informed your contribution</li>
            </ul>
            
            <h2>Enforcement</h2>
            <p>
              Curators are responsible for enforcing the code of conduct. Violations may result in:
            </p>
            <ul>
              <li>A warning with an explanation of the violation</li>
              <li>Temporary suspension from participation</li>
              <li>Permanent removal from the platform for severe or repeated violations</li>
            </ul>
            
            <p>
              Reports of code of conduct violations will be handled with discretion and 
              appropriate action will be taken based on the severity and context of the violation.
            </p>
            
            <h2>Reporting Guidelines</h2>
            <p>
              If you experience or witness a violation of the code of conduct, please report it by:
            </p>
            <ul>
              <li>Using the "Flag" feature on the relevant content</li>
              <li>Emailing <a href="mailto:conduct@boulder.builders" className="text-boulder-teal-600 hover:underline">conduct@boulder.builders</a></li>
            </ul>
            
            <p>
              Please include as much detail as possible in your report, including:
            </p>
            <ul>
              <li>What happened</li>
              <li>Where it happened (URL, event, etc.)</li>
              <li>Who was involved</li>
              <li>Any additional context that might be helpful</li>
            </ul>
            
            <h2>Acknowledgment</h2>
            <p>
              By participating in Boulder.Builders, you agree to abide by this code of conduct.
            </p>
            
            <p className="text-sm text-boulder-stone-500 mt-8">
              Last updated: April 30, 2025
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CodeOfConduct;
