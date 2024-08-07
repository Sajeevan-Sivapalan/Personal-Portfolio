import { Button } from '../../components/button';
import { DecoderText } from '../../components/decoder-text';
import { Divider } from '../../components/divider';
import { Footer } from '../../components/footer';
import { Heading } from '../../components/heading';
import { Image } from '../../components/image';
import { Section } from '../../components/section';
import { Text } from '../../components/text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from '~/hooks';
import { Link as RouterLink, useLoaderData } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { formatDate } from '../../utils/date';
import { classes, cssProps } from '../../utils/style';
import styles from './articles.module.css';

function ArticlesPost({ slug, frontmatter, timecode, index }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title, abstract, date, featured, banner } = frontmatter;

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          Featured
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={banner}
            placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Swami Vivekananda
          </div>
          <Heading as="h2" level={featured ? 2 : 4}>
            The Companionship of Books
          </Heading>
          <Text size={featured ? 'l' : 's'} as="p">
            "Books are the best companions for a learned man. He can discuss with them all his doubts and solve his problems. Books are a great source of joy and wisdom. They teach us to see the world in a different light."
          </Text>
          <div className={styles.postFooter}>
            <Text className={styles.timecode} size="s">
              19th and early 20th centuries
            </Text>
          </div>
        </div>
      </RouterLink>
      {featured && (
        <Text aria-hidden className={styles.postTag} size="s">
          
        </Text>
      )}
    </article>
  );
}

function SkeletonPost_1({ index }) {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post)}
      data-featured="false"
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Medium
          </div>
          <Heading
            as="s"
            level={4}
            style={{ height: 24, width: '70%' }}
          ></Heading>
          <Heading
            level={4}
            as=""
            style={{ height: 90, width: '100%' }}
          >Navigating the Challenges: Solutions for Software Engineering, Machine Learning, and DevOps</Heading>
          <div className={styles.postFooter}>
            <Button iconHoverShift href={""} iconEnd="arrow-right">
              View Blogs.
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function SkeletonPost_2({ index }) {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post)}
      data-featured="false"
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Medium
          </div>
          <Heading
            as="s"
            level={4}
            style={{ height: 24, width: '70%' }}
          ></Heading>
          <Heading
            level={4}
            as=""
            style={{ height: 90, width: '100%' }}
          >Navigating the Challenges: Solutions for Software Engineering, Machine Learning, and DevOps</Heading>
          <div className={styles.postFooter}>
            <Button iconHoverShift href={""} iconEnd="arrow-right">
              View Blogs.
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function SkeletonPost_3({ index }) {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post)}
      data-featured="false"
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Jishu/Journal of Propulsion Technology
          </div>
          <Heading
            as="s"
            level={4}
            style={{ height: 24, width: '70%' }}
          ></Heading>
          <Heading
            level={4}
            as=""
            style={{ height: 90, width: '100%' }}
          >
            Enhancing E-Commerce Experience through Virtual Fitting Rooms: A Case Study of Real-Time Virtual Try-On for Eyewear Selection</Heading>
          <div className={styles.postFooter}>
            <Button iconHoverShift href={"https://propulsiontechjournal.com/index.php/journal/article/view/1385"} iconEnd="arrow-right">
              View Blogs.
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}


export function Articles() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="Articles" />
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      {/* {posts.map(({ slug, ...post }, index) => (
        <ArticlesPost key={slug} slug={slug} index={index} {...post} />
      ))} */}
      {Array(1)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost_1 key={index} index={index} />
        ))}
        {Array(1)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost_2 key={index} index={index} />
        ))}
        {Array(1)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost_3 key={index} index={index} />
        ))}
    </div>
  );

  const featuredPost = <ArticlesPost {...featured} />;

  return (
    <article className={styles.articles}>
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {postList}
            {featuredPost}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postsHeader}
            {featuredPost}
            {postList}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
}
