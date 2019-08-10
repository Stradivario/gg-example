import { DirectiveLocation, GraphQLCustomDirective } from '@gapi/core';

export async function ToUppercase() {
  return new GraphQLCustomDirective<string>({
    name: 'toUpperCase',
    description: 'change the case of a string to uppercase',
    locations: [DirectiveLocation.FIELD],
    resolve: async resolve => (await resolve()).toUpperCase()
  });
}
