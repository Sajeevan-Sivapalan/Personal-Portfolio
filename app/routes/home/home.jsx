import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import projectShowcase from '~/assets/projects-common-bg.jpg';
import articleShowcase from '~/assets/article-common-bg.jpg';
import aboutShowcase1 from '~/assets/about-me-common-bg-1.jpg';
import contactShowcase1 from '~/assets/contact-common-bg-1.jpg';
import aboutShowcase2 from '~/assets/about-me-common-bg-2.jpg';
import contactShowcase2 from '~/assets/contact-common-bg-2.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: '',
    description: ``,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projects = useRef();
  const profile = useRef();
  const article = useRef();
  const contact = useRef();

  useEffect(() => {
    //const sections = [intro, projects, profile, article, details];
    const sections = [intro, projects, profile, article, contact];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-container"
        sectionRef={projects}
        visible={visibleSections.includes(projects.current)}
        index={1}
        title="My Projects"
        description="Explore a showcase of my latest work, featuring a diverse array of creative and technical projects."
        buttonText="View project"
        buttonLink="/projects"
        model={{
          type: 'laptop',
          alt: 'An image showcasing a completed project, highlighting the intricate details and design elements',
          textures: [
            {
              srcSet: `${projectShowcase} 1280w, ${projectShowcase} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="about-me-container"
        alternate
        sectionRef={profile}
        visible={visibleSections.includes(profile.current)}
        index={2}
        title="About Me"
        description="Get to know more about my background, skills, and the journey that has shaped my career and passions."
        buttonText="View"
        buttonLink="/profile"
        model={{
          type: 'phone',
          alt: 'A professional headshot of me, smiling and looking approachable, set against a neutral background.',
          textures: [
            {
              srcSet: `${aboutShowcase1} 375w, ${aboutShowcase1} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${aboutShowcase2} 375w, ${aboutShowcase2} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="article-container"
        sectionRef={article}
        visible={visibleSections.includes(article.current)}
        index={3}
        title="Articles"
        description="Dive into my articles, where I share insights, stories, and tips on various topics that inspire me."
        buttonText="View articles"
        buttonLink="/articles"
        model={{
          type: 'laptop',
          alt: 'An image of an open laptop with a articles post on the screen, symbolizing the process of writing and sharing ideas.',
          textures: [
            {
              srcSet: `${articleShowcase} 800w, ${articleShowcase} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="contact-container"
        alternate
        sectionRef={contact}
        visible={visibleSections.includes(contact.current)}
        index={4}
        title="Get in Touch"
        description="Have questions or want to collaborate? Reach out to me!"
        buttonText="Contact Me"
        buttonLink="/contact"
        model={{
          type: 'phone',
          alt: 'A professional headshot of me, smiling and looking approachable, set against a neutral background.',
          textures: [
            {
              srcSet: `${contactShowcase1} 375w, ${contactShowcase1} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${contactShowcase2} 375w, ${contactShowcase2} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
