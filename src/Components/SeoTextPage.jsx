import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SeoTextPage() {
    const { pathname } = useLocation()

    if (pathname === "/blog") {
        return (
            <>
                <div className="hidden-text">
                    <p>Capobrain is a cutting-edge school management software designed to simplify administrative tasks, enhance communication, and improve overall school operations. From managing student records to facilitating teacher-parent interactions, Capobrain provides an all-in-one solution tailored to the specific needs of educational institutions.</p>
                    <p>With Capobrain, schools can automate time-consuming administrative processes such as attendance tracking, grade reporting, and timetable scheduling. By digitizing these tasks, administrators save valuable time and reduce the risk of human error, ensuring smoother day-to-day operations.</p>
                    <p>One of Capobrain's key features is its communication platform, which connects teachers, students, parents, and administrators seamlessly. Whether it's sharing updates, sending reminders, or discussing student progress, Capobrain ensures that everyone stays informed and engaged.</p>
                    <p>Capobrain centralizes all student data, including personal information, academic performance, attendance records, and more. This comprehensive student management system allows schools to access important data quickly, making it easier to monitor student progress and make informed decisions.</p>
                    <p>Security is a top priority for Capobrain. The software ensures that sensitive information, such as student records and financial data, is securely stored and accessible only to authorized users. Additionally, the cloud-based system allows access to data from anywhere, at any time, ensuring flexibility and convenience.</p>
                    <p>Capobrain understands that no two schools are the same, which is why it offers customizable features. Whether a school needs specific modules for extracurricular activities, exam scheduling, or parent-teacher meetings, Capobrain can be tailored to meet the unique requirements of each institution.</p>
                    <p>In today's fast-paced world, schools need modern solutions to stay ahead. Capobrain provides an innovative approach to school management, helping institutions run efficiently while enhancing the educational experience for students. With its powerful features and user-friendly interface, Capobrain is the perfect tool for schools looking to streamline operations and improve outcomes.</p>
                    <p>Capobrain adapts to the changing needs of education by offering tools that support both remote and hybrid learning environments. With features such as online class scheduling, virtual assignments, and progress tracking, the software ensures that students and teachers can stay connected and productive, regardless of their location.</p>
                    <p>Capobrain provides detailed analytics that give schools valuable insights into student performance, attendance trends, and overall school efficiency. By leveraging this data, school administrators can make informed decisions to improve teaching strategies, allocate resources effectively, and ensure a better educational experience for all.</p>
                </div>
            </>
        )
    }
    if (pathname === "/contact") {
        return (
            <>
                <div className="hidden-text">
                    <p>We at Capobrain are always here to help you with any questions or inquiries about our school management software. Whether you are interested in learning more about our features or need support with your current subscription, feel free to reach out to us anytime.</p>
                    <p>Our dedicated support team is available to assist you with any technical issues or questions you may have. We are committed to providing prompt and effective solutions to ensure that your experience with Capobrain is smooth and hassle-free.</p>
                    <p>Interested in seeing how Capobrain can transform your school's management processes? Request a personalized demo, and one of our team members will guide you through our platform, showcasing how it can meet the specific needs of your institution.</p>
                    <p>For general inquiries, such as pricing information, features, or partnership opportunities, our team is available to answer all your questions. Simply fill out the contact form, and we will get back to you as soon as possible.</p>
                    <p>We value feedback from our users as it helps us improve our services. If you have any suggestions, comments, or experiences you'd like to share with us, we encourage you to get in touch. Your input is vital to our continuous growth and improvement.</p>
                    <p>Having trouble with your Capobrain account or need help with a specific feature? Our technical support team is ready to assist you. Contact us through our support channels, and we’ll ensure your issues are resolved quickly and efficiently.</p>
                    <p>Follow us on social media to stay updated with the latest news, updates, and features from Capobrain. We regularly post helpful tips, software updates, and industry insights to keep you informed and engaged.</p>
                    <p>Our headquarters are located in [City, Country], and we welcome any visits or in-person consultations. If you would like to schedule a meeting with us, don’t hesitate to reach out through our contact form or give us a call.</p>
                    <p>At Capobrain, we prioritize accessibility. Whether it’s through email, phone, or our contact form, we make it easy for you to reach out to us. Our goal is to respond to all inquiries promptly, ensuring that you receive the support and answers you need.</p>
                </div>
            </>
        )
    }
}
