const isAuthenticated = async (
  resolve: any,
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  if (!context.session.userId) {
    // user is not logged in
    console.log('resolve',resolve);
    console.log('parent',parent);
    console.log('args', args);
    console.log('context',context);
    console.log('info',info);
    
    throw new Error("not authenticated from graphql middleware");

  }

  return resolve(parent, args, context, info);
};

export const middleware = {
  Mutation: {
    createListing: isAuthenticated,
    deleteListing: isAuthenticated,
    createTicket: isAuthenticated
  }
};
