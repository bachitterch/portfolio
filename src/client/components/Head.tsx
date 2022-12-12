import { useEffect, useRef } from "react";
import { Link, Meta } from "react-head";

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

export function Head(props: HeadProps) {
  const prevTitle = useRef(document.title);

  if (document.title !== props.title) document.title = props.title!;

  if (!props.title) document.title = prevTitle.current;

  useEffect(() => {
    return () => {
      document.title = prevTitle.current;
    };
  }, []);

  return (
    <>
      {props.meta?.map((tag, index) => (
        <Meta key={index} name={tag.name} content={tag.content} />
      ))}
      {props.link?.map((tag, index) => (
        <Link key={index} rel={tag.rel} href={tag.href} />
      ))}
      {props.twitter?.map((tag, index) => (
        <Meta key={index} name={tag.type} content={tag.content} />
      ))}
      {props.openGraph?.map((tag, index) => (
        <Meta key={index} name={tag.type} content={tag.content} />
      ))}
      {props.canonical && (
        <Link
          rel="canonical"
          href={`https://bachitter.dev/${props.canonical.href}`}
        />
      )}
    </>
  );
}
