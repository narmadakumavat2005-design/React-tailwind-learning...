import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Footer from './components/Footer'
import { Bell, User, Search ,MessageSquareText} from "lucide-react";

function App() {
  const [Search, setSearch] = useState("");
  const data=[
  {
  id: 1,
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  name: "Narmada Kumavat",
  profession: "Frontend Developer",
  company: "Google",
  location: "Ahmedabad, India",
  experience: "2 Years",
  followers: "2.4K",
  status: "Available"
},
{
  id: 2,
  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  name: "Naincy Rajput",
  profession: "Cyber Security",
  company: "Microsoft",
  location: "Delhi, India",
  experience: "3 Years",
  followers: "3.8K",
  status: "Busy"
},
{
  id: 3,
  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  name: "Hemanshi Patel",
  profession: "Civil Engineer",
  company: "L&T",
  location: "Surat, India",
  experience: "4 Years",
  followers: "1.9K",
  status: "Available"
},
{
  id: 4,
  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  name: "Rahul Sharma",
  profession: "UI/UX Designer",
  company: "Adobe",
  location: "Pune, India",
  experience: "5 Years",
  followers: "4.5K",
  status: "Available"
},
{
  id: 5,
  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  name: "Priya Verma",
  profession: "Software Engineer",
  company: "Amazon",
  location: "Hyderabad, India",
  experience: "3 Years",
  followers: "5.2K",
  status: "Busy"
},
{
  id: 6,
  img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
  name: "Aman Singh",
  profession: "React Developer",
  company: "Infosys",
  location: "Indore, India",
  experience: "2 Years",
  followers: "2.1K",
  status: "Available"
},
{
  id: 7,
  img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400",
  name: "Aarav Mehta",
  profession: "MERN Stack Developer",
  company: "Infosys",
  location: "Ahmedabad, India",
  experience: "3 Years",
  followers: "2.8K",
  status: "Available",
},
{
  id: 8,
  img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
  name: "Riya Sharma",
  profession: "React Developer",
  company: "Google",
  location: "Delhi, India",
  experience: "2 Years",
  followers: "3.5K",
  status: "Busy",
},
{
  id: 9,
  img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
  name: "Kabir Joshi",
  profession: "Backend Developer",
  company: "Amazon",
  location: "Pune, India",
  experience: "4 Years",
  followers: "4.7K",
  status: "Available",
},
{
  id: 10,
  img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=400",
  name: "Ananya Patel",
  profession: "UI/UX Designer",
  company: "Adobe",
  location: "Mumbai, India",
  experience: "3 Years",
  followers: "2.9K",
  status: "Available",
},
{
  id: 11,
  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
  name: "Yash Verma",
  profession: "Node.js Developer",
  company: "Microsoft",
  location: "Noida, India",
  experience: "5 Years",
  followers: "5.8K",
  status: "Busy",
},
{
  id: 12,
  img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
  name: "Meera Kapoor",
  profession: "Frontend Developer",
  company: "Flipkart",
  location: "Jaipur, India",
  experience: "2 Years",
  followers: "2.4K",
  status: "Available",
},
{
  id: 13,
  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  name: "Dev Patel",
  profession: "Java Developer",
  company: "Oracle",
  location: "Ahmedabad, India",
  experience: "4 Years",
  followers: "3.6K",
  status: "Busy",
},
{
  id: 14,
  img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400",
  name: "Simran Kaur",
  profession: "Full Stack Developer",
  company: "TCS",
  location: "Chandigarh, India",
  experience: "5 Years",
  followers: "6.1K",
  status: "Available",
},
{
  id: 15,
  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  name: "Rohan Singh",
  profession: "Flutter Developer",
  company: "PhonePe",
  location: "Indore, India",
  experience: "3 Years",
  followers: "3.2K",
  status: "Available",
},
{
  id: 16,
  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  name: "Sneha Gupta",
  profession: "Python Developer",
  company: "Zoho",
  location: "Hyderabad, India",
  experience: "4 Years",
  followers: "4.4K",
  status: "Busy",
},
{
  id: 17,
  img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400",
  name: "Harsh Jain",
  profession: "Cloud Engineer",
  company: "AWS",
  location: "Bangalore, India",
  experience: "6 Years",
  followers: "7.3K",
  status: "Available",
},
{
  id: 18,
  img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
  name: "Pooja Mishra",
  profession: "Data Scientist",
  company: "NVIDIA",
  location: "Pune, India",
  experience: "5 Years",
  followers: "5.1K",
  status: "Available",
},
{
  id: 19,
  img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400",
  name: "Aditya Rao",
  profession: "AI Engineer",
  company: "OpenAI",
  location: "Hyderabad, India",
  experience: "4 Years",
  followers: "8.6K",
  status: "Busy",
},
{
  id: 20,
  img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
  name: "Ishita Shah",
  profession: "Mobile App Developer",
  company: "Samsung",
  location: "Ahmedabad, India",
  experience: "3 Years",
  followers: "3.9K",
  status: "Available",
},
{
  id: 21,
  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  name: "Karan Malhotra",
  profession: "DevOps Engineer",
  company: "IBM",
  location: "Mumbai, India",
  experience: "5 Years",
  followers: "5.6K",
  status: "Busy",
},
{
  id: 22,
  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  name: "Arjun Desai",
  profession: "React Developer",
  company: "TCS",
  location: "Mumbai, India",
  experience: "3 Years",
  followers: "2.8K",
  status: "Available",
},
{
  id: 23,
  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
  name: "Neha Sharma",
  profession: "Frontend Developer",
  company: "Accenture",
  location: "Bangalore, India",
  experience: "2 Years",
  followers: "3.1K",
  status: "Busy",
},
{
  id: 24,
  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  name: "Rohit Jain",
  profession: "Backend Developer",
  company: "IBM",
  location: "Pune, India",
  experience: "4 Years",
  followers: "4.3K",
  status: "Available",
},
{
  id: 25,
  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  name: "Khushi Patel",
  profession: "UI/UX Designer",
  company: "Adobe",
  location: "Ahmedabad, India",
  experience: "3 Years",
  followers: "2.7K",
  status: "Available",
},
{
  id: 26,
  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  name: "Sakshi Verma",
  profession: "React Native Developer",
  company: "Infosys",
  location: "Indore, India",
  experience: "2 Years",
  followers: "2.2K",
  status: "Busy",
},
{
  id: 27,
  img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
  name: "Mohit Gupta",
  profession: "Node.js Developer",
  company: "Paytm",
  location: "Noida, India",
  experience: "5 Years",
  followers: "5.8K",
  status: "Available",
},
{
  id: 28,
  img: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400",
  name: "Ankit Singh",
  profession: "Full Stack Developer",
  company: "Flipkart",
  location: "Delhi, India",
  experience: "4 Years",
  followers: "4.9K",
  status: "Available",
},
{
  id: 29,
  img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400",
  name: "Pallavi Mishra",
  profession: "Python Developer",
  company: "Zoho",
  location: "Chennai, India",
  experience: "3 Years",
  followers: "2.5K",
  status: "Busy",
},
{
  id: 30,
  img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
  name: "Aditi Rao",
  profession: "AI Engineer",
  company: "OpenAI",
  location: "Hyderabad, India",
  experience: "4 Years",
  followers: "7.2K",
  status: "Available",
},
{
  id: 31,
  img: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=400",
  name: "Riya Kapoor",
  profession: "Flutter Developer",
  company: "PhonePe",
  location: "Bangalore, India",
  experience: "2 Years",
  followers: "2.9K",
  status: "Available",
},
{
  id: 32,
  img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400",
  name: "Vikas Sharma",
  profession: "Cloud Engineer",
  company: "AWS",
  location: "Hyderabad, India",
  experience: "6 Years",
  followers: "8.1K",
  status: "Busy",
},
{
  id: 33,
  img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400",
  name: "Megha Joshi",
  profession: "Data Scientist",
  company: "Microsoft",
  location: "Pune, India",
  experience: "5 Years",
  followers: "6.4K",
  status: "Available",
},
{
  id: 34,
  img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400",
  name: "Harshit Meena",
  profession: "Java Developer",
  company: "Oracle",
  location: "Jaipur, India",
  experience: "4 Years",
  followers: "3.6K",
  status: "Available",
},
{
  id: 35,
  img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400",
  name: "Tanvi Shah",
  profession: "DevOps Engineer",
  company: "Google",
  location: "Mumbai, India",
  experience: "5 Years",
  followers: "5.5K",
  status: "Busy",
},
{
  id: 36,
  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
  name: "Kunal Patel",
  profession: "Software Engineer",
  company: "Meta",
  location: "Bangalore, India",
  experience: "3 Years",
  followers: "4.7K",
  status: "Available",
},
];
const filterData =data.filter((developer)=>{
            return developer.name
            .toLowerCase()
            .includes(Search.toLowerCase());
          });
        

  return (
    <>
      <Navbar/>
      <Searchbar search={Search}
                setSearch={setSearch}/>
        
      
      
      <div className='min-h-screen bg-black flex justify-center items-center gap-12 flex-wrap p-10'>
      
         { 
           filterData.map((dt)=>(
            <Card 
            key={dt.id}
            img={dt.img}
            name={dt.name}
            profession={dt.profession}
            company={dt.company}
            location={dt.location}
            experience={dt.experience}
            followers={dt.followers}
            status={dt.status}

            />
          ))
        }
        
      </div>
      <Footer/>
    </>
  )
}

export default App
