import { gql } from "@apollo/client";

// Post Queries
export const PostCollection = gql`
  query ($preview: Boolean!) {
    postCollection(
      where: { slug_exists: true }
      preview: $preview
      order: sys_publishedAt_DESC
    ) {
      items {
        title
        description
        slug
        featured
        sys {
          publishedAt
        }
        thumbnail {
          url
          width
          height
          description
        }
      }
    }
  }
`;

export const PostSlugs = gql`
  query {
    postCollection(where: { slug_exists: true }, order: sys_publishedAt_DESC) {
      items {
        slug
      }
    }
  }
`;

export const PostBySlug = gql`
  query ($slug: String!, $preview: Boolean!) {
    postCollection(where: { slug: $slug }, preview: $preview, limit: 1) {
      items {
        title
        description
        slug
        sys {
          publishedAt
        }
        thumbnail {
          url
          width
          height
          description
        }
        content
      }
    }
  }
`;

export const PreviewPost = gql`
  query ($slug: String!) {
    postCollection(where: { slug: $slug }, preview: true, limit: 1) {
      items {
        title
        description
        slug
        sys {
          publishedAt
        }
        thumbnail {
          url
          width
          height
          description
        }
        content
      }
    }
  }
`;

// Projct Queries
export const ProjectCollection = gql`
  query {
    projectCollection {
      items {
        title
        description
        link
        thumbnail {
          url
          width
          height
          description
        }
        stack
      }
    }
  }
`;
