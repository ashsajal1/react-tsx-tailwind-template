import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import Particles from "@/components/custom-ui/particles";
import { 
    ArrowRight, 
    Zap, 
    Shield, 
    BarChart3, 
    Users, 
    Star
} from "lucide-react";

const features = [
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Lightning Fast",
        description: "Experience blazing fast performance with our optimized infrastructure."
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: "Enterprise Security",
        description: "Bank-grade security with end-to-end encryption and compliance."
    },
    {
        icon: <BarChart3 className="h-6 w-6" />,
        title: "Advanced Analytics",
        description: "Get detailed insights and analytics to grow your business."
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Team Collaboration",
        description: "Work seamlessly with your team in real-time."
    }
];

const testimonials = [
    {
        content: "SaaSify has transformed how we handle our business operations. The platform is intuitive and powerful.",
        author: "Sarah Johnson",
        role: "CEO, TechCorp",
        rating: 5
    },
    {
        content: "The best SaaS solution we've used. The features are exactly what we needed to scale our business.",
        author: "Michael Chen",
        role: "CTO, InnovateX",
        rating: 5
    },
    {
        content: "Outstanding support and regular updates. The team behind SaaSify is truly dedicated to their users.",
        author: "Emily Rodriguez",
        role: "Operations Director, GrowthLabs",
        rating: 5
    }
];

export default function Home() {
    return (
        <>
            <Seo 
                title="SaaSify - Your All-in-One Business Solution" 
                description="Transform your business with SaaSify. The ultimate platform for modern businesses." 
            />
            
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden bg-background">
                <div className="absolute inset-0">
                    <Particles />
                </div>
                <div className="relative z-10">
                    <div className="container mx-auto px-4 py-24 md:py-32">
                        <div className="flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-3xl"
                            >
                                <Text 
                                    label="SaaSify" 
                                    className="text-4xl md:text-5xl font-bold text-primary mb-6" 
                                />
                                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                                    Transform Your Business with Modern Solutions
                                </h1>
                                <p className="text-xl text-muted-foreground mb-8">
                                    The all-in-one platform that helps you streamline operations, 
                                    boost productivity, and drive growth.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                                        Get Started Free
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Watch Demo
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-4xl"
                            >
                                {[
                                    { 
                                        number: "10K+", 
                                        label: "Active Users",
                                        description: "Growing daily",
                                        icon: <Users className="h-6 w-6 text-primary" />
                                    },
                                    { 
                                        number: "99.9%", 
                                        label: "Uptime",
                                        description: "Last 30 days",
                                        icon: <Zap className="h-6 w-6 text-primary" />
                                    },
                                    { 
                                        number: "24/7", 
                                        label: "Support",
                                        description: "Average response time: 15min",
                                        icon: <Shield className="h-6 w-6 text-primary" />
                                    },
                                    { 
                                        number: "50+", 
                                        label: "Features",
                                        description: "Regular updates",
                                        icon: <BarChart3 className="h-6 w-6 text-primary" />
                                    }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            {stat.icon}
                                            <div className="text-3xl font-bold text-primary">{stat.number}</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-semibold text-foreground">{stat.label}</div>
                                            <div className="text-sm text-muted-foreground">{stat.description}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Powerful Features for Modern Business
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to run your business efficiently
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-primary mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Trusted by Businesses Worldwide
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            See what our customers have to say about us
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-card p-6 rounded-lg shadow-sm"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="font-semibold text-foreground">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join thousands of businesses that trust SaaSify for their daily operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
