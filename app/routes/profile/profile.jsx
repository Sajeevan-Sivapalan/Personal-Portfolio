import profileImgLarge from '~/assets/profile.jpeg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpeg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from '~/routes/home/katakana.svg';
import styles from './profile.module.css';
import { baseMeta } from '~/utils/meta';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { ThemeProvider } from '~/components/theme-provider';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import { ProjectSummary } from '../home/project-summary';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import linkedInShowcase from '~/assets/linked-in-common-bg-1.jpg';
import { useEffect, useRef } from 'react';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hello!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    I’m Sajeevan, a passionate software developer with over a year of experience in the tech industry. 
    Currently based in Sri Lanka, I specialize in web development and full-stack development, where I’ve 
    had the opportunity to work on a range of innovative projects focused on creating dynamic and responsive 
    applications. My journey in the software world began with a strong foundation in 
    <Link href="https://www.sliit.lk/computing/programmes/software-engineering-degree/"> Information Technology specialized in Software Engineering </Link> 
     at <Link href="https://www.sliit.lk/">SLIIT</Link>. Since then, I've been committed to honing my skills and 
    delivering high-quality solutions that meet user needs and exceed expectations.

    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      
    </Text>
  </Fragment>
);

export const meta = () => {
  return baseMeta({ prefix: 'Profile' });
};


export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(true);
  const titleId = `${id}-title`;
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const LinkedIn = useRef();

  useEffect(() => {
    const sections = [LinkedIn];

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

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  
  
  return (
    <>
      <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Download CV
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>


    
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
            <div className={styles.home}>
              <ProjectSummary
                id="LinkedIn-container"
                sectionRef={LinkedIn}
                visible={visibleSections.includes(LinkedIn.current)}
                index="Sajeevan"
                title="Connect with Me on LinkedIn"
                description="Discover more about my professional experience and educational background on LinkedIn. I’m eager to connect with industry professionals to share insights and explore collaboration opportunities."
                buttonText=" View LinkedIn Profile"
                buttonLink="https://www.linkedin.com/in/sajeevan-sivapalan-65b903215/"
                model={{
                  type: 'laptop',
                  alt: 'An image showcasing a completed project, highlighting the intricate details and design elements',
                  textures: [
                    {
                      srcSet: `${linkedInShowcase} 1280w, ${linkedInShowcase} 2560w`,
                      placeholder: sprTexturePlaceholder,
                    },
                  ],
                }}
              />
            </div>
          </ProjectSection>
        </ThemeProvider>
      </ProjectContainer>


      {/* <ProjectContainer>
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
                  <ProjectSectionHeading>Experience</ProjectSectionHeading>
                  <ProjectSectionText>
                    <h2>SenzMate IoT Intelligence</h2>
                    <h1>Associate Software Developer</h1>
                    <p>January 2024 - Present</p>
                    <p>Full Time</p>
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <h2>SenzMate IoT Intelligence</h2>
                    <h1>Intern Software Developer</h1>
                    <p>July 2023 - December 2023 (6 months)</p>
                    <p>Internship</p>
                  </ProjectSectionText>                  
                </ProjectTextRow>
              </ProjectSectionContent>  
              
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                <ProjectSectionHeading>Education</ProjectSectionHeading>
                <ProjectSectionText>
                    <h2>Sri Lanka Institute of Information Technology</h2>
                    <p>Information Technology Specializing in Software Engineering</p>
                    <p>2021 - 2025</p>
                  </ProjectSectionText>
                  <ProjectSectionText>
                    <h2>S.Thomas' College, Mount Lavinia</h2>
                    <p>Physical Science</p>
                    <p>2011 - 2020</p>
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
      </ProjectContainer> */}
    </>
  );
};
