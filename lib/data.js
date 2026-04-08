import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "SP",
    name: "Sarah P.",
    role: "Patient",
    quote:
      "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    initials: "DR",
    name: "Dr. Robert M.",
    role: "Cardiologist",
    quote:
      "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Patient",
    quote:
      "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-emerald-400'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-emerald-400'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-emerald-400'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-emerald-400'>anytime</strong> without penalties",
];

export const doctors=[    {
        "id": 345,
        "name": "Dr. Bowen Chan",
        
        "image": "/img/doctors/chan_small.jpg",
        "availability" : {
            "Monday": "8:30am - 5:30pm",
            "Wednesday": "1:30pm - 7:30pm",
            "Thrusday": "10am - 8pm",
            "Friday": "9am - 12pm"
        },
        "phone": "416-486-1956",
      
        "reviews": [
            {
                "name": "",
                "rating": 5,
                "comments": "Very good doctor.",
                "attributes": {
                    "staff": 5,
                    "punctual": 5,
                    "helpful": 5,
                    "knowledge": 5
                }
            },
            {
                "name": "",
                "rating": 5,
                "comments": "They are particularly wonderful with my baby daughter",
                "attributes": {
                    "staff": 5,
                    "punctual": 5,
                    "helpful": 5,
                    "knowledge": 5
                }
            },
            {
                "name": "",
                "rating": 4.75,
                "comments": "Awesome doc that really knows his stuff.",
                "attributes": {
                    "staff": 5,
                    "punctual": 4,
                    "helpful": 5,
                    "knowledge": 5
                }
            },
            {
                "name": "",
                "rating": 3.75,
                "comments": "We had to find a new Dr. with the sudden passing of ours. Dr. Chan & his Associates are very caring.",
                "attributes": {
                    "staff": 3,
                    "punctual": 4,
                    "helpful": 5,
                    "knowledge": 3
                }
            }
        ]
    },
    {
        "id": 564,
        "name": "Dr. Michael Lewis BSc, MD, CCFP",
      
        "image": "/img/doctors/Michael_Lewis_small.jpg",
        "availability" : {
            "Monday": "9am - 5pm",
            "Tuesday": "9am - 12pm",
            "Friday": "9am - 12pm"
        },
        "phone": "416-486-1956",
 
        "reviews": [
            {
                "name": "",
                "rating": 2.5,
                "comments": "Dr. Lewis is good, but the person whop answers the phone and who you depend on to get an appointment, keep track of information, etc, is terrible. Her command of the english language isn't great, and results in a LOT of errors.",
                "attributes": {
                    "staff": 1,
                    "punctual": 2,
                    "helpful": 3,
                    "knowledge": 4
                }
            }
        ]
    },
    {
        "id": 675,
        "name": "Dr. Sharon Hind BScH, MD, CCFP",
        
        "image": "/img/doctors/sharonwelch_small.jpg",
        "availability" : {
            "Monday": "10am - 2pm",
            "Tuesday": "11am - 5pm",
            "Wednesday": "10am - 5pm"
        },
        "phone": "416-486-1956",

        "reviews": [
            {
                "name": "",
                "rating": 5,
                "comments": "",
                "attributes": {
                    "staff": 5,
                    "punctual": 5,
                    "helpful": 5,
                    "knowledge": 5
                }
            },
            {
                "name": "",
                "rating": 4.75,
                "comments": "",
                "attributes": {
                    "staff": 5,
                    "punctual": 5,
                    "helpful": 5,
                    "knowledge": 4
                }
            },
            {
                "name": "",
                "rating": 4.75,
                "comments": "very caring and attentive",
                "attributes": {
                    "staff": 4,
                    "punctual": 5,
                    "helpful": 5,
                    "knowledge": 5
                }
            },
            {
                "name": "",
                "rating": 4.75,
                "comments": "",
                "attributes": {
                    "staff": 4,
                    "punctual": 5,
                    "helpful": 5,
                    "knowledge": 3
                }
            }
        ]
    },
    {
        "id": 152,
        "name": "Dr. Sheeja Mathai",
        
        "image": "/img/doctors/drmathai_small.jpg",
        "availability" : {
        },
        "phone": "647-722-2370",
   
        "reviews": []
    },
    {
        "id": 222,
        "name": "Dr. Preston Tran",
        
        "image": "/img/doctors/TranTriet_small.jpg",
        "phone": "647-722-2370",
         
        "reviews": [
            {
                "name": "",
                "rating": 4.5,
                "comments": "Wonderful doctor: respectful, skillful, thorough, takes time, cares. ",
                "attributes": {
                    "staff": 4,
                    "punctual": 4,
                    "helpful": 5,
                    "knowledge": 5
                }
            }
        ]
    }

]