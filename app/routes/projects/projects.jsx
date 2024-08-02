import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import videoSprMotionPlaceholder from '~/assets/gamestack-list-placeholder.jpg';
import githubIntro from '~/assets/github_intro.mp4';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { lazy } from 'react';
import { media } from '~/utils/style';
import styles from './projects.module.css';
import { Button } from '~/components/button';

const title = '';
const description = '';
const roles = [];

const projects = [
  {
    title: 'Solar Flare - Web Application for an Optical Store',
    description: 'A web application providing an advanced virtual try-on experience for glasses, allowing users to see how different styles look using their device\'s camera.',
    stack: ['MERN Stack', 'Tailwind CSS', 'Git'],
    url: 'https://github.com/Sajeevan-Sivapalan/Enhanced-virtual-fitting-room',
  },
  {
    title: 'Human Resource Management System',
    description: 'This system includes modules for employee management, payroll, training and development, job vacancies, transport, leave and attendance, and resource management.',
    stack: ['MERN Stack', 'Git'],
    url: 'https://github.com/Sajeevan-Sivapalan/Human-Resource-Management-System',
  },
  {
    title: 'Educational Platform for Online Learning',
    description: 'A web application with Express.js and MongoDB backend, Vite React and Tailwind CSS frontend, featuring course management, payment integration, and notifications, focusing on scalability, security, and microservices architecture.',
    stack: ['MERN Stack', 'Docker', 'Microservices', 'Tailwind CSS'],
    url: 'https://github.com/Sajeevan-Sivapalan/Educational-Platform-for-Online-Learning',
  },
  {
    title: 'Build Zone - Web and Mobile Applications for the Construction Industry',
    description: 'A web and mobile application for the construction industry, powered by a unified backend, enabling users in the procurement industry to manage their purchase orders.',
    stack: ['MERN Stack', 'Flutter', 'Tailwind CSS', 'Git'],
    url: 'https://github.com/Sajeevan-Sivapalan/Build-Zone',
  },
  {
    title: 'React Frontend Application Using NASA APIs',
    description: 'A React frontend application using NASA\'s public APIs, featuring functional components and Tailwind CSS styling. It includes a Node.js backend for user management and is deployed on Vercel.',
    stack: ['React.js', 'Git'],
    url: 'https://github.com/Sajeevan-Sivapalan/React-Frontend-Application-Using-NASA-APIs',
  },
  {
    title: 'Farm Connect - Mobile Application for Farmers and Customers',
    description: 'A mobile application connecting farmers and customers directly, ensuring fair prices for farmers and high-quality products for customers by reducing middlemen commissions.',
    stack: ['Flutter', 'Node.js', 'MongoDB', 'Git'],
    url: 'https://github.com/Sajeevan-Sivapalan/Farm-Connect',
  },
  {
    title: 'University Timetable Management System',
    description: 'A RESTful API backend for a University Timetable Management System, including features for managing courses, timetables, room bookings, and notifications.',
    stack: ['MERN Stack', 'Unit Testing', 'Integration Testing', 'Security Testing', 'Performance Testing', 'Git'],
    url: 'https://www.example.com/university-timetable',
  },
  {
    title: 'Skin Consultation Center',
    description: 'An application for a skin consultation center with both console and GUI interfaces, allowing management of doctor consultations and patient bookings.',
    stack: ['Java'],
    url: 'https://github.com/Sajeevan-Sivapalan/Skin-Consultation-Center',
  },
  {
    title: 'Wallet App',
    description: 'A financial planning app developed for a Mobile Application Development module project, using Android Studio with Kotlin and Firebase as the database.',
    stack: ['Android Studio', 'Git', 'Kotlin'],
    url: 'https://github.com/Sajeevan-Sivapalan/Wallet-App',
  },
  {
    title: 'Exam Result Management System',
    description: 'An application where admins can add student marks, calculate results, and store them in a database. Students can view results using their index numbers and report issues to the admin.',
    stack: ['Web Development'],
    url: 'https://github.com/Sajeevan-Sivapalan/Exam-Result-Management-System',
  },
  {
    title: 'Online Examination Management System',
    description: 'A web-based examination management system developed using Java, with MySQL as the database management system, for an Object-Oriented Programming module project.',
    stack: ['Java', 'MySQL'],
    url: 'https://github.com/Sajeevan-Sivapalan/Online-Examination-Management-System',
  },
  {
    title: 'Inventory Management System',
    description: 'A basic inventory management system that updates and maintains stock details in inventory.',
    stack: ['HTML5', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    url: 'https://github.com/Sajeevan-Sivapalan/Inventory-Management-System',
  },
];
 

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Projects = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
    <ProjectContainer>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Explore My Projects</ProjectSectionHeading>
                  <ProjectSectionText>
                    Discover a variety of my software engineering, machine learning, and DevOps projects. Dive into the code, explore the solutions, and see how each project addresses real-world problems.
                  </ProjectSectionText>
                  <div className={styles.button}>
                    <Button iconHoverShift href={"https://github.com/Sajeevan-Sivapalan"} iconEnd="arrow-right">
                      View on GitHub
                    </Button>
                  </div>
                </ProjectTextRow>
              </ProjectSectionContent>  
              <Image
                raised
                className={styles.video}
                srcSet={`${githubIntro} 1280w, ${githubIntro} 2560w`}
                width={1280}
                height={800}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        {projects.map((project, index) => (
        <ProjectHeader
        title={project.title}
        description={project.description}
        url={project.url}
        roles={project.stack}
      />
      ))}
      </ProjectContainer>
      <Footer />
    </>
  );
};
