export interface AllPostsResponse {
  postCollection: {
    items: {
      title: string;
      description: string;
      featured: boolean;
      slug: string;
      sys: {
        publishedAt: Date;
        __typename: string;
      };
      thumbnail: {
        url: string;
        width: number;
        height: number;
        description: string;
        __typename: string;
      };
      __typename: string;
    }[];
    __typename: string;
  };
}

export interface AllPostSlugsResponse {
  postCollection: {
    items: {
      slug: string;
    };
  };
}

export interface PostBySlugResponse {
  postCollection: {
    items: {
      title: string;
      description: string;
      slug: string;
      sys: {
        publishedAt: Date;
        __typename: string;
      };
      thumbnail: {
        url: string;
        width: number;
        height: number;
        description: string;
        __typename: string;
      };
      content: string;
      __typename: string;
    };
  };
}

export interface PreviewPostResponse {
  postCollection: {
    items: {
      title: string;
      description: string;
      slug: string;
      sys: {
        publishedAt: Date;
        __typename: string;
      };
      thumbnail: {
        url: string;
        width: number;
        height: number;
        description: string;
        __typename: string;
      };
      content: string;
      __typename: string;
    };
  };
}

export interface ProjectCollectionResponse {
  projectCollection: {
    items: {
      title: string;
      description: string;
      link: string;
      thumbnail: {
        url: string;
        width: number;
        height: number;
        description: string;
        __typename: string;
      };
      stack: string;
    };
  };
}
