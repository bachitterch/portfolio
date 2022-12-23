import type { ApolloQueryResult } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { type Env } from "src/server/env";
import type { Dependencies } from "src/server/utils";

import {
  PostBySlug,
  PostCollection,
  PostSlugs,
  PreviewPost,
  ProjectCollection,
} from "./queries";
import type {
  AllPostSlugsResponse,
  AllPostsResponse,
  PostBySlugResponse,
  PreviewPostResponse,
  ProjectCollectionResponse,
} from "./types";

export class contentfulService {
  private readonly env: Env;
  private readonly apiEndpoint: string;

  constructor(deps: Dependencies) {
    this.env = deps.env;
    this.apiEndpoint = `https://graphql.contentful.com/content/v1/spaces/${deps.env.CONTENTFUL_SPACE_ID}/environments/master`;
  }

  private apolloClient(preview = false) {
    return new ApolloClient({
      uri: this.apiEndpoint,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${
          preview
            ? this.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : this.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
    });
  }

  public async getAllPosts(
    preview: boolean,
  ): Promise<ApolloQueryResult<AllPostsResponse>> {
    const { data } = await this.apolloClient(preview).query({
      query: PostCollection,
      variables: { preview },
    });

    return data;
  }

  public async getAllPostsBySlug(): Promise<
    ApolloQueryResult<AllPostSlugsResponse>
  > {
    const { data } = await this.apolloClient().query({
      query: PostSlugs,
    });

    return data;
  }

  public async getPost(
    slug: string,
    preview = false,
  ): Promise<ApolloQueryResult<PostBySlugResponse>> {
    const { data } = await this.apolloClient(preview).query({
      query: PostBySlug,
      variables: {
        slug,
        preview,
      },
    });

    return data;
  }

  public async getPreviewPost(
    slug: string,
    preview = true,
  ): Promise<ApolloQueryResult<PreviewPostResponse>> {
    const { data } = await this.apolloClient(preview).query({
      query: PreviewPost,
      variables: slug,
    });

    return data;
  }

  public async getAllProjects(): Promise<
    ApolloQueryResult<ProjectCollectionResponse>
  > {
    const { data } = await this.apolloClient().query({
      query: ProjectCollection,
    });
    return data;
  }
}
