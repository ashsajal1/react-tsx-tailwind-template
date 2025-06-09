import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "29",
        description: "Perfect for small teams and startups",
        features: [
            "Up to 5 team members",
            "Basic analytics",
            "24/7 email support",
            "1GB storage",
            "Basic integrations",
            "Monthly reports"
        ],
        popular: false
    },
    {
        name: "Professional",
        price: "79",
        description: "Ideal for growing businesses",
        features: [
            "Up to 20 team members",
            "Advanced analytics",
            "Priority support",
            "10GB storage",
            "Advanced integrations",
            "Custom reports",
            "API access",
            "Team collaboration"
        ],
        popular: true
    },
    {
        name: "Enterprise",
        price: "299",
        description: "For large organizations",
        features: [
            "Unlimited team members",
            "Enterprise analytics",
            "24/7 phone support",
            "Unlimited storage",
            "Custom integrations",
            "Advanced security",
            "Dedicated account manager",
            "Custom solutions",
            "SLA guarantee"
        ],
        popular: false
    }
];

export default function Pricing() {
    return (
        <>
            <Seo 
                title="Pricing | SaaSify" 
                description="Choose the perfect plan for your business. Flexible pricing options for teams of all sizes." 
            />
            
            <div className="min-h-screen bg-background">
                {/* Header */}
                <section className="pt-20 pb-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Text 
                                    label="Pricing" 
                                    className="text-4xl md:text-5xl font-bold text-primary mb-6" 
                                />
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Simple, Transparent Pricing
                                </h1>
                                <p className="text-xl text-muted-foreground">
                                    Choose the perfect plan for your business. All plans include a 14-day free trial.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {plans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`bg-card rounded-lg shadow-sm p-8 relative ${
                                        plan.popular ? 'border-2 border-primary' : 'border border-border'
                                    }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                                            <span className="text-muted-foreground">/month</span>
                                        </div>
                                        <p className="text-muted-foreground mt-2">{plan.description}</p>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button 
                                        className={`w-full ${
                                            plan.popular 
                                                ? 'bg-primary hover:bg-primary/90' 
                                                : 'bg-secondary hover:bg-secondary/90'
                                        }`}
                                    >
                                        Get Started
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-12 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                                Frequently Asked Questions
                            </h2>
                            
                            <div className="space-y-8">
                                {[
                                    {
                                        question: "Can I change plans later?",
                                        answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                                    },
                                    {
                                        question: "What payment methods do you accept?",
                                        answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
                                    },
                                    {
                                        question: "Is there a free trial?",
                                        answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
                                    },
                                    {
                                        question: "Do you offer refunds?",
                                        answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
                                    }
                                ].map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-card p-6 rounded-lg shadow-sm"
                                    >
                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Still have questions?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Our team is here to help you choose the right plan for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-primary hover:bg-primary/90">
                                    Contact Sales
                                </Button>
                                <Button size="lg" variant="outline">
                                    View Documentation
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 