import { createPortal } from "react-dom";

export interface HeadProps {
  title?: string;
  link?: {
    rel:
      | "alternative"
      | "author"
      | "dns-prefetch"
      | "help"
      | "icon"
      | "license"
      | "next"
      | "pingback"
      | "preconnect"
      | "prefetch"
      | "preload"
      | "prerender"
      | "prev"
      | "search"
      | "stylesheet";
    href: string;
  }[];
  meta?: {
    name: "author" | "description" | "generator" | "keywords" | "viewport";
    content: string;
  }[];
  canonical?: {
    href: string;
  };
  openGraph?: {
    type:
      | "og:title"
      | "og:url"
      | "og:image"
      | "og:type"
      | "og:description"
      | "og:locale";

    content: string;
  }[];
  twitter?: {
    type:
      | "twitter:site"
      | "twitter:creator"
      | "twitter:description"
      | "twitter:title"
      | "twitter:image";
    content: string;
  }[];
}

const headRoot = document.head;

export function Head(props: HeadProps) {
  return createPortal(
    <>
      <title>
        {props.title
          ? props.title
          : "Bachitter Chahal - Full Stack Web Developer"}
      </title>
      {props.meta?.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      {props.link?.map((tag, index) => (
        <link key={index} rel={tag.rel} href={tag.href} />
      ))}
      {props.twitter?.map((tag, index) => (
        <meta key={index} name={tag.type} content={tag.content} />
      ))}
      {props.openGraph?.map((tag, index) => (
        <meta key={index} name={tag.type} content={tag.content} />
      ))}
      {props.canonical && (
        <link
          rel="canonical"
          href={`https://bachitter.dev/${props.canonical.href}`}
        />
      )}
    </>,
    headRoot,
  );
}
