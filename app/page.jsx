"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Stethoscope, X } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle,  CardAction } from "@/components/ui/card"
import { creditBenefits, features, testimonials } from "@/lib/data";
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar } from "@/components/ui/calendar"


export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gradient-title">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[600px] w-[600px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/banner2.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover pl-14  rounded-xl"
              />
            </div>
          </div>    
        </div>  
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform makes healthcare accessible with just a few clicks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 x/px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
            Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Consultation packages
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Chose the package that fits your needs and start consulting with our verified doctors today. Each consultation requires 2 credits, which can be purchased in convenient packages to suit your healthcare needs.
            </p>
          </div>
          <div>
            <Card className="mt-12 bg-muted/20 border-emerald-900/30">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                 <Stethoscope className="h-5 w-5 text-emerald-400 inline-block mr-2" />
                   How our Credit System works
                </CardTitle>
             </CardHeader>
      <CardContent>
        <ul className="space-y-3">{creditBenefits.map((benefit, index) => {
          return (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                <Check className="h-4 w-4 text-emerald-400"/>
                
              </div>
              <p className="text-muted-foreground"
                dangerouslySetInnerHTML={{__html:benefit}}/>
              </li>
          )
        })}
        </ul>
      </CardContent>
      </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 x/px-4 py-1 text-emerald-400 text-sm font-medium mb-4">
              Q&A
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            
          </div>
          {/* Use type="multiple" to allow multiple items and to add a border AND implement
          
          import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
  },
]

export function AccordionBorders() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-lg rounded-lg border"
      defaultValue="billing"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

*/}
  <Accordion type="single" collapsible defaultValue="item-1" className='border-b last:border-b-0 max-w-2xl mx-auto'>
  <AccordionItem value="item-1" className="border-b border-emerald-900/20">
    <AccordionTrigger className="text-md hover:no-underline hover:text-muted-foreground">How can I book an appointment?</AccordionTrigger>
    <AccordionContent className="text-muted-foreground text-sm max-h-96 overflow-y-auto">
      To <strong className='text-emerald-400'>book</strong> an appointment, simply create an account, browse our list of verified doctors, and select a time slot that works for you. You can choose between in-person or video consultations based on your preference.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className="text-md hover:no-underline hover:text-muted-foreground">What is the credit system?</AccordionTrigger>
    <AccordionContent className="text-muted-foreground text-sm  max-h-96 overflow-y-auto">
     <strong className='text-emerald-400'>Our credit system</strong> allows you to purchase consultation credits in convenient packages. Each consultation, regardless of duration, requires 2 credits. This flexible model lets you manage your healthcare expenses while ensuring access to quality care.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger className="text-md hover:no-underline hover:text-muted-foreground">Are the doctors verified?</AccordionTrigger>
    <AccordionContent className="text-muted-foreground text-sm  max-h-96  overflow-y-auto">
      Yes,<strong className='text-emerald-400'> all doctors on our platform are verified</strong> and undergo a rigorous vetting process to ensure they meet our high standards for quality care. You can trust that you're consulting with qualified professionals.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger className="text-md hover:no-underline hover:text-muted-foreground">How do video consultations work?</AccordionTrigger>
    <AccordionContent className="text-muted-foreground text-sm  max-h-96 overflow-y-auto">
      Video consultations are conducted through our <strong className='text-emerald-400'>secure</strong> platform. Once you book a video appointment, you'll receive a link to join the consultation at the scheduled time. You can discuss your health concerns with the doctor in real-time, just as you would in an in-person visit.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
</section>

<section className="py-10 bg-muted/30">
{/* {<Image
        src="/appointment.png"
        alt="Calendar illustration"
          width={400}
          height={400}
      />}
      */}
      <div className="container mx-auto flex flex-cols-2 sm:gap-30 items-center justify-center max-w-7xl"> 
 
      
      <Calendar
      mode="single"
      className="rounded-lg border max-w-3xl max-h-96 overflow-y-auto bg-card border-teal-300/40  sm:ml-0 "
      captionLayout="dropdown"
    >
     
    </Calendar>

    <h2 className="text-3xl md:text-4xl font-bold text-white">Book an Appointment at preferred time
    <p className="text-muted-foreground gradient-title text-lg max-w-2xl ">You can select a date and time that works for you.</p>
     <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              
                </h2>
    </div>

</section>
    </div>
    ) 
}
