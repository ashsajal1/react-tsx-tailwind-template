import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import { 
    Zap, 
    Shield, 
    BarChart3, 
    Users, 
    Clock, 
    Settings,
    MessageSquare,
    FileText,
    Globe,
    Lock
} from "lucide-react";

const features = [
    {
        category: "Performance",
        items: [
            {
                title: "Lightning Fast",
                description: "Experience blazing fast performance with our optimized infrastructure.",
                icon: <Zap className="h-6 w-6" />
            },
            {
                title: "Real-time Updates",
                description: "Get instant updates and notifications across all your devices.",
                icon: <Clock className="h-6 w-6" />
            }
        ]
    },
    {
        category: "Security",
        items: [
            {
                title: "Enterprise Security",
                description: "Bank-grade security with end-to-end encryption and compliance.",
                icon: <Shield className="h-6 w-6" />
            },
            {
                title: "Data Protection",
                description: "Advanced data protection and privacy controls for your information.",
                icon: <Lock className="h-6 w-6" />
            }
        ]
    },
    {
        category: "Analytics",
        items: [
            {
                title: "Advanced Analytics",
                description: "Get detailed insights and analytics to grow your business.",
                icon: <BarChart3 className="h-6 w-6" />
            },
            {
                title: "Custom Reports",
                description: "Create and schedule custom reports for your team.",
                icon: <FileText className="h-6 w-6" />
            }
        ]
    },
    {
        category: "Collaboration",
        items: [
            {
                title: "Team Collaboration",
                description: "Work seamlessly with your team in real-time.",
                icon: <Users className="h-6 w-6" />
            },
            {
                title: "Communication Tools",
                description: "Built-in messaging and communication features.",
                icon: <MessageSquare className="h-6 w-6" />
            }
        ]
    },
    {
        category: "Integration",
        items: [
            {
                title: "Easy Integration",
                description: "Connect with your favorite tools and services.",
                icon: <Settings className="h-6 w-6" />
            },
            {
                title: "Global Access",
                description: "Access your data from anywhere in the world.",
                icon: <Globe className="h-6 w-6" />
            }
        ]
    }
];

export default function Features() {
    return (
        <>
            <Seo 
                title="Features | SaaSify" 
                description="Discover the powerful features that make SaaSify the perfect solution for your business." 
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
                                    label="Features" 
                                    className="text-4xl md:text-5xl font-bold text-primary mb-6" 
                                />
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Everything You Need to Succeed
                                </h1>
                                <p className="text-xl text-muted-foreground">
                                    Powerful features designed to help you streamline operations, 
                                    boost productivity, and drive growth.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            {features.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="mb-16">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-2xl font-bold text-foreground mb-8"
                                    >
                                        {category.category}
                                    </motion.h2>
                                    
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {category.items.map((feature, featureIndex) => (
                                            <motion.div
                                                key={featureIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="text-primary p-2 bg-primary/10 rounded-lg">
                                                        {feature.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-foreground mb-2">
                                                            {feature.title}
                                                        </h3>
                                                        <p className="text-muted-foreground">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Join thousands of businesses that trust SaaSify for their daily operations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-primary hover:bg-primary/90">
                                    Start Free Trial
                                </Button>
                                <Button size="lg" variant="outline">
                                    Schedule Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 