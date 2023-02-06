import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: any;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  itemCount?: Maybe<Scalars['Int']>;
  itemStockManagement?: Maybe<ItemStockManagement>;
  items?: Maybe<ItemConnection>;
  name: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};


export type CategoryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Autogenerated input type of CreateItem */
export type CreateItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  params: ItemAttributes;
};

/** Autogenerated return type of CreateItem. */
export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  item: Item;
};

/** Autogenerated input type of CreateItemStockManagement */
export type CreateItemStockManagementInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  params: ItemStockManagementAttributes;
};

/** Autogenerated return type of CreateItemStockManagement. */
export type CreateItemStockManagementPayload = {
  __typename?: 'CreateItemStockManagementPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  itemStockManagement: ItemStockManagement;
};

/** Autogenerated input type of DeleteItem */
export type DeleteItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteItem. */
export type DeleteItemPayload = {
  __typename?: 'DeleteItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DiscardItemAttributes = {
  itemId: Scalars['ID'];
};

/** Autogenerated input type of DiscardItem */
export type DiscardItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  params: DiscardItemAttributes;
};

/** Autogenerated return type of DiscardItem. */
export type DiscardItemPayload = {
  __typename?: 'DiscardItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  item: Item;
};

export type Item = {
  __typename?: 'Item';
  categoryId: Scalars['ID'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type ItemAttributes = {
  categoryId: Scalars['ID'];
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Int']>;
};

/** The connection type for Item. */
export type ItemConnection = {
  __typename?: 'ItemConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ItemEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Item>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Item>;
};

export type ItemStockManagement = {
  __typename?: 'ItemStockManagement';
  category: Category;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  itemCount: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  upperLimit: Scalars['Int'];
};

export type ItemStockManagementAttributes = {
  categoryId: Scalars['ID'];
  upperLimit: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<CreateItemPayload>;
  createItemStockManagement?: Maybe<CreateItemStockManagementPayload>;
  deleteItem?: Maybe<DeleteItemPayload>;
  discardItem?: Maybe<DiscardItemPayload>;
  restoreItem?: Maybe<RestoreItemPayload>;
  updateItem?: Maybe<UpdateItemPayload>;
  updateItemStockManagement?: Maybe<UpdateItemStockManagementPayload>;
};


export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


export type MutationCreateItemStockManagementArgs = {
  input: CreateItemStockManagementInput;
};


export type MutationDeleteItemArgs = {
  input: DeleteItemInput;
};


export type MutationDiscardItemArgs = {
  input: DiscardItemInput;
};


export type MutationRestoreItemArgs = {
  input: RestoreItemInput;
};


export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


export type MutationUpdateItemStockManagementArgs = {
  input: UpdateItemStockManagementInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  discardedItems: Array<Item>;
  item: Item;
  itemStockManagement: ItemStockManagement;
  itemStockManagements: Array<ItemStockManagement>;
  items: Array<Item>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryItemArgs = {
  id: Scalars['ID'];
};


export type QueryItemStockManagementArgs = {
  id: Scalars['ID'];
};

export type RestoreItemAttributes = {
  itemId: Scalars['ID'];
};

/** Autogenerated input type of RestoreItem */
export type RestoreItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  params: RestoreItemAttributes;
};

/** Autogenerated return type of RestoreItem. */
export type RestoreItemPayload = {
  __typename?: 'RestoreItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  item: Item;
};

/** Autogenerated input type of UpdateItem */
export type UpdateItemInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  params: ItemAttributes;
};

/** Autogenerated return type of UpdateItem. */
export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  item: Item;
};

export type UpdateItemStockManagementAttributes = {
  upperLimit: Scalars['Int'];
};

/** Autogenerated input type of UpdateItemStockManagement */
export type UpdateItemStockManagementInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  params: UpdateItemStockManagementAttributes;
};

/** Autogenerated return type of UpdateItemStockManagement. */
export type UpdateItemStockManagementPayload = {
  __typename?: 'UpdateItemStockManagementPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  itemStockManagement: ItemStockManagement;
};

export type ItemBaseFragment = { __typename?: 'Item', id: string, name: string, price?: number | null, categoryId: string };

export type ItemStockManagementBaseFragment = { __typename?: 'ItemStockManagement', id: string, upperLimit: number, createdAt: any, updatedAt: any, itemCount: number, category: { __typename?: 'Category', id: string, name: string, createdAt: any, updatedAt: any } };

export type CreateItemMutationVariables = Exact<{
  params: ItemAttributes;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem?: { __typename?: 'CreateItemPayload', item: { __typename?: 'Item', id: string, name: string, price?: number | null, categoryId: string } } | null };

export type CreateItemStockManagementMutationVariables = Exact<{
  params: ItemStockManagementAttributes;
}>;


export type CreateItemStockManagementMutation = { __typename?: 'Mutation', createItemStockManagement?: { __typename?: 'CreateItemStockManagementPayload', itemStockManagement: { __typename?: 'ItemStockManagement', id: string, upperLimit: number, category: { __typename?: 'Category', id: string, name: string } } } | null };

export type DeleteItemMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem?: { __typename?: 'DeleteItemPayload', id: string } | null };

export type DiscardItemMutationVariables = Exact<{
  params: DiscardItemAttributes;
}>;


export type DiscardItemMutation = { __typename?: 'Mutation', discardItem?: { __typename?: 'DiscardItemPayload', item: { __typename?: 'Item', id: string, name: string, price?: number | null } } | null };

export type RestoreItemMutationVariables = Exact<{
  params: RestoreItemAttributes;
}>;


export type RestoreItemMutation = { __typename?: 'Mutation', restoreItem?: { __typename?: 'RestoreItemPayload', item: { __typename?: 'Item', id: string, name: string, price?: number | null } } | null };

export type UpdateItemMutationVariables = Exact<{
  id: Scalars['ID'];
  params: ItemAttributes;
}>;


export type UpdateItemMutation = { __typename?: 'Mutation', updateItem?: { __typename?: 'UpdateItemPayload', item: { __typename?: 'Item', id: string, name: string, price?: number | null, categoryId: string } } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, itemCount?: number | null, itemStockManagement?: { __typename?: 'ItemStockManagement', upperLimit: number } | null, items?: { __typename?: 'ItemConnection', nodes?: Array<{ __typename?: 'Item', id: string, name: string, price?: number | null } | null> | null } | null }> };

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, name: string, itemCount?: number | null, itemStockManagement?: { __typename?: 'ItemStockManagement', upperLimit: number } | null, items?: { __typename?: 'ItemConnection', nodes?: Array<{ __typename?: 'Item', id: string, name: string, price?: number | null } | null> | null } | null } };

export type DiscardedItemsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type DiscardedItemsPageQuery = { __typename?: 'Query', discardedItems: Array<{ __typename?: 'Item', id: string, name: string, price?: number | null, categoryId: string }> };

export type ItemQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ItemQuery = { __typename?: 'Query', item: { __typename?: 'Item', id: string, name: string, price?: number | null, categoryId: string } };

export type ItemStockManagementQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ItemStockManagementQuery = { __typename?: 'Query', itemStockManagement: { __typename?: 'ItemStockManagement', id: string, upperLimit: number, createdAt: any, updatedAt: any, itemCount: number, category: { __typename?: 'Category', id: string, name: string, createdAt: any, updatedAt: any } } };

export type ItemStockManagementsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemStockManagementsQuery = { __typename?: 'Query', itemStockManagements: Array<{ __typename?: 'ItemStockManagement', id: string, upperLimit: number, createdAt: any, updatedAt: any, itemCount: number, category: { __typename?: 'Category', id: string, name: string, createdAt: any, updatedAt: any } }> };

export type ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: string, name: string, price?: number | null, categoryId: string, createdAt: any, updatedAt: any }> };

export const ItemBaseFragmentDoc = gql`
    fragment itemBase on Item {
  id
  name
  price
  categoryId
}
    `;
export const ItemStockManagementBaseFragmentDoc = gql`
    fragment itemStockManagementBase on ItemStockManagement {
  id
  upperLimit
  createdAt
  updatedAt
  itemCount
  category {
    id
    name
    createdAt
    updatedAt
  }
}
    `;
export const CreateItemDocument = gql`
    mutation createItem($params: ItemAttributes!) {
  createItem(input: {params: $params}) {
    item {
      id
      name
      price
      categoryId
    }
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const CreateItemStockManagementDocument = gql`
    mutation createItemStockManagement($params: ItemStockManagementAttributes!) {
  createItemStockManagement(input: {params: $params}) {
    itemStockManagement {
      id
      upperLimit
      category {
        id
        name
      }
    }
  }
}
    `;
export type CreateItemStockManagementMutationFn = Apollo.MutationFunction<CreateItemStockManagementMutation, CreateItemStockManagementMutationVariables>;

/**
 * __useCreateItemStockManagementMutation__
 *
 * To run a mutation, you first call `useCreateItemStockManagementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemStockManagementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemStockManagementMutation, { data, loading, error }] = useCreateItemStockManagementMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useCreateItemStockManagementMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemStockManagementMutation, CreateItemStockManagementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemStockManagementMutation, CreateItemStockManagementMutationVariables>(CreateItemStockManagementDocument, options);
      }
export type CreateItemStockManagementMutationHookResult = ReturnType<typeof useCreateItemStockManagementMutation>;
export type CreateItemStockManagementMutationResult = Apollo.MutationResult<CreateItemStockManagementMutation>;
export type CreateItemStockManagementMutationOptions = Apollo.BaseMutationOptions<CreateItemStockManagementMutation, CreateItemStockManagementMutationVariables>;
export const DeleteItemDocument = gql`
    mutation deleteItem($id: ID!) {
  deleteItem(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, options);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const DiscardItemDocument = gql`
    mutation discardItem($params: DiscardItemAttributes!) {
  discardItem(input: {params: $params}) {
    item {
      id
      name
      price
    }
  }
}
    `;
export type DiscardItemMutationFn = Apollo.MutationFunction<DiscardItemMutation, DiscardItemMutationVariables>;

/**
 * __useDiscardItemMutation__
 *
 * To run a mutation, you first call `useDiscardItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDiscardItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [discardItemMutation, { data, loading, error }] = useDiscardItemMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useDiscardItemMutation(baseOptions?: Apollo.MutationHookOptions<DiscardItemMutation, DiscardItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DiscardItemMutation, DiscardItemMutationVariables>(DiscardItemDocument, options);
      }
export type DiscardItemMutationHookResult = ReturnType<typeof useDiscardItemMutation>;
export type DiscardItemMutationResult = Apollo.MutationResult<DiscardItemMutation>;
export type DiscardItemMutationOptions = Apollo.BaseMutationOptions<DiscardItemMutation, DiscardItemMutationVariables>;
export const RestoreItemDocument = gql`
    mutation restoreItem($params: RestoreItemAttributes!) {
  restoreItem(input: {params: $params}) {
    item {
      id
      name
      price
    }
  }
}
    `;
export type RestoreItemMutationFn = Apollo.MutationFunction<RestoreItemMutation, RestoreItemMutationVariables>;

/**
 * __useRestoreItemMutation__
 *
 * To run a mutation, you first call `useRestoreItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreItemMutation, { data, loading, error }] = useRestoreItemMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useRestoreItemMutation(baseOptions?: Apollo.MutationHookOptions<RestoreItemMutation, RestoreItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestoreItemMutation, RestoreItemMutationVariables>(RestoreItemDocument, options);
      }
export type RestoreItemMutationHookResult = ReturnType<typeof useRestoreItemMutation>;
export type RestoreItemMutationResult = Apollo.MutationResult<RestoreItemMutation>;
export type RestoreItemMutationOptions = Apollo.BaseMutationOptions<RestoreItemMutation, RestoreItemMutationVariables>;
export const UpdateItemDocument = gql`
    mutation updateItem($id: ID!, $params: ItemAttributes!) {
  updateItem(input: {id: $id, params: $params}) {
    item {
      id
      name
      price
      categoryId
    }
  }
}
    `;
export type UpdateItemMutationFn = Apollo.MutationFunction<UpdateItemMutation, UpdateItemMutationVariables>;

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useUpdateItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateItemMutation, UpdateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(UpdateItemDocument, options);
      }
export type UpdateItemMutationHookResult = ReturnType<typeof useUpdateItemMutation>;
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>;
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<UpdateItemMutation, UpdateItemMutationVariables>;
export const CategoriesDocument = gql`
    query categories {
  categories {
    id
    name
    itemCount
    itemStockManagement {
      upperLimit
    }
    items {
      nodes {
        id
        name
        price
      }
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query Category($id: ID!) {
  category(id: $id) {
    id
    name
    itemCount
    itemStockManagement {
      upperLimit
    }
    items {
      nodes {
        id
        name
        price
      }
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const DiscardedItemsPageDocument = gql`
    query discardedItemsPage {
  discardedItems {
    ...itemBase
  }
}
    ${ItemBaseFragmentDoc}`;

/**
 * __useDiscardedItemsPageQuery__
 *
 * To run a query within a React component, call `useDiscardedItemsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscardedItemsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscardedItemsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useDiscardedItemsPageQuery(baseOptions?: Apollo.QueryHookOptions<DiscardedItemsPageQuery, DiscardedItemsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DiscardedItemsPageQuery, DiscardedItemsPageQueryVariables>(DiscardedItemsPageDocument, options);
      }
export function useDiscardedItemsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscardedItemsPageQuery, DiscardedItemsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DiscardedItemsPageQuery, DiscardedItemsPageQueryVariables>(DiscardedItemsPageDocument, options);
        }
export type DiscardedItemsPageQueryHookResult = ReturnType<typeof useDiscardedItemsPageQuery>;
export type DiscardedItemsPageLazyQueryHookResult = ReturnType<typeof useDiscardedItemsPageLazyQuery>;
export type DiscardedItemsPageQueryResult = Apollo.QueryResult<DiscardedItemsPageQuery, DiscardedItemsPageQueryVariables>;
export const ItemDocument = gql`
    query Item($id: ID!) {
  item(id: $id) {
    ...itemBase
  }
}
    ${ItemBaseFragmentDoc}`;

/**
 * __useItemQuery__
 *
 * To run a query within a React component, call `useItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useItemQuery(baseOptions: Apollo.QueryHookOptions<ItemQuery, ItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemQuery, ItemQueryVariables>(ItemDocument, options);
      }
export function useItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemQuery, ItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemQuery, ItemQueryVariables>(ItemDocument, options);
        }
export type ItemQueryHookResult = ReturnType<typeof useItemQuery>;
export type ItemLazyQueryHookResult = ReturnType<typeof useItemLazyQuery>;
export type ItemQueryResult = Apollo.QueryResult<ItemQuery, ItemQueryVariables>;
export const ItemStockManagementDocument = gql`
    query ItemStockManagement($id: ID!) {
  itemStockManagement(id: $id) {
    ...itemStockManagementBase
  }
}
    ${ItemStockManagementBaseFragmentDoc}`;

/**
 * __useItemStockManagementQuery__
 *
 * To run a query within a React component, call `useItemStockManagementQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemStockManagementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemStockManagementQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useItemStockManagementQuery(baseOptions: Apollo.QueryHookOptions<ItemStockManagementQuery, ItemStockManagementQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemStockManagementQuery, ItemStockManagementQueryVariables>(ItemStockManagementDocument, options);
      }
export function useItemStockManagementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemStockManagementQuery, ItemStockManagementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemStockManagementQuery, ItemStockManagementQueryVariables>(ItemStockManagementDocument, options);
        }
export type ItemStockManagementQueryHookResult = ReturnType<typeof useItemStockManagementQuery>;
export type ItemStockManagementLazyQueryHookResult = ReturnType<typeof useItemStockManagementLazyQuery>;
export type ItemStockManagementQueryResult = Apollo.QueryResult<ItemStockManagementQuery, ItemStockManagementQueryVariables>;
export const ItemStockManagementsDocument = gql`
    query itemStockManagements {
  itemStockManagements {
    ...itemStockManagementBase
  }
}
    ${ItemStockManagementBaseFragmentDoc}`;

/**
 * __useItemStockManagementsQuery__
 *
 * To run a query within a React component, call `useItemStockManagementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemStockManagementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemStockManagementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemStockManagementsQuery(baseOptions?: Apollo.QueryHookOptions<ItemStockManagementsQuery, ItemStockManagementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemStockManagementsQuery, ItemStockManagementsQueryVariables>(ItemStockManagementsDocument, options);
      }
export function useItemStockManagementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemStockManagementsQuery, ItemStockManagementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemStockManagementsQuery, ItemStockManagementsQueryVariables>(ItemStockManagementsDocument, options);
        }
export type ItemStockManagementsQueryHookResult = ReturnType<typeof useItemStockManagementsQuery>;
export type ItemStockManagementsLazyQueryHookResult = ReturnType<typeof useItemStockManagementsLazyQuery>;
export type ItemStockManagementsQueryResult = Apollo.QueryResult<ItemStockManagementsQuery, ItemStockManagementsQueryVariables>;
export const ItemsDocument = gql`
    query items {
  items {
    id
    name
    price
    categoryId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemsQuery(baseOptions?: Apollo.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
      }
export function useItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
        }
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>;
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>;
export type ItemsQueryResult = Apollo.QueryResult<ItemsQuery, ItemsQueryVariables>;