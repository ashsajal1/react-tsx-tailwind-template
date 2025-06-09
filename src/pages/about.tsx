import Seo from '../components/Seo';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import Text from "@/components/custom-ui/text";
import { ArrowRight, Target, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Our Mission",
    description: "To empower businesses with innovative solutions that drive growth and success in the digital age."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that set new industry standards."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Security",
    description: "Your data security is our top priority. We maintain the highest standards of data protection."
  }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export default function About() {
  return (
    <>
      <Seo 
        title="About Us | SaaSify" 
        description="Learn about our mission, values, and the team behind SaaSify - your trusted partner in digital transformation." 
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Text 
                  label="About Us" 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6" 
                />
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Transforming Ideas into Digital Reality
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  We're a team of passionate innovators dedicated to helping businesses thrive in the digital landscape.
                </p>
                <Button 
                  size="lg"
                  className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 text-primary-foreground"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Our Team
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                The passionate people behind our success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center bg-card p-8 rounded-2xl shadow-sm"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of businesses already using our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 text-primary-foreground"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg"
                  variant="secondary"
                  className="relative overflow-hidden group bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary hover:shadow-lg transition-all duration-300 text-secondary-foreground"
                >
                  <span className="relative z-10">Contact Sales</span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
