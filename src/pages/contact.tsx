import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Seo from '../components/Seo';
import Text from "@/components/custom-ui/text";
import { 
    Mail, 
    Phone, 
    MapPin, 
    Clock,
    Send
} from "lucide-react";

const contactInfo = [
    {
        icon: <Mail className="h-6 w-6" />,
        title: "Email",
        content: "support@saasify.com",
        description: "We'll respond as soon as possible"
    },
    {
        icon: <Phone className="h-6 w-6" />,
        title: "Phone",
        content: "+1 (555) 123-4567",
        description: "Mon-Fri from 8am to 6pm"
    },
    {
        icon: <MapPin className="h-6 w-6" />,
        title: "Office",
        content: "123 Business Ave, Suite 100",
        description: "San Francisco, CA 94107"
    },
    {
        icon: <Clock className="h-6 w-6" />,
        title: "Hours",
        content: "Monday - Friday",
        description: "9:00 AM - 6:00 PM PST"
    }
];

export default function Contact() {
    return (
        <>
            <Seo 
                title="Contact Us | SaaSify" 
                description="Get in touch with our team. We're here to help you succeed with SaaSify." 
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
                                    label="Contact" 
                                    className="text-4xl md:text-5xl font-bold text-primary mb-6" 
                                />
                                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    Get in Touch
                                </h1>
                                <p className="text-xl text-muted-foreground">
                                    Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Grid */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Contact Form */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-card p-8 rounded-lg shadow-sm"
                                >
                                    <h2 className="text-2xl font-bold text-foreground mb-6">
                                        Send us a Message
                                    </h2>
                                    <form className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                                                    First Name
                                                </label>
                                                <Input 
                                                    id="firstName" 
                                                    placeholder="John" 
                                                    className="w-full"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                                                    Last Name
                                                </label>
                                                <Input 
                                                    id="lastName" 
                                                    placeholder="Doe" 
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                                Email
                                            </label>
                                            <Input 
                                                id="email" 
                                                type="email" 
                                                placeholder="john@example.com" 
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                                                Subject
                                            </label>
                                            <Input 
                                                id="subject" 
                                                placeholder="How can we help?" 
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                                                Message
                                            </label>
                                            <Textarea 
                                                id="message" 
                                                placeholder="Your message here..." 
                                                className="w-full min-h-[150px]"
                                            />
                                        </div>
                                        <Button className="w-full bg-primary hover:bg-primary/90">
                                            Send Message
                                            <Send className="ml-2 h-4 w-4" />
                                        </Button>
                                    </form>
                                </motion.div>

                                {/* Contact Information */}
                                <div className="space-y-8">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-card p-8 rounded-lg shadow-sm"
                                    >
                                        <h2 className="text-2xl font-bold text-foreground mb-6">
                                            Contact Information
                                        </h2>
                                        <div className="space-y-6">
                                            {contactInfo.map((info, index) => (
                                                <div key={index} className="flex items-start gap-4">
                                                    <div className="text-primary p-2 bg-primary/10 rounded-lg">
                                                        {info.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-foreground">
                                                            {info.title}
                                                        </h3>
                                                        <p className="text-muted-foreground">
                                                            {info.content}
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {info.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Map or Additional Info */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="bg-card p-8 rounded-lg shadow-sm"
                                    >
                                        <h2 className="text-2xl font-bold text-foreground mb-6">
                                            Follow Us
                                        </h2>
                                        <div className="flex gap-4">
                                            <Button variant="outline" className="flex-1">
                                                Twitter
                                            </Button>
                                            <Button variant="outline" className="flex-1">
                                                LinkedIn
                                            </Button>
                                            <Button variant="outline" className="flex-1">
                                                GitHub
                                            </Button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 