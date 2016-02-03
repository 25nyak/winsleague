const poolsRoutes = FlowRouter.group({
  prefix: '/pools',
});

// http://app.com/pools
poolsRoutes.route('/', {
  action() {
    log.debug("We're viewing a list of pools.");
  },
});

// http://app.com/pools/new
poolsRoutes.route('/new', {
  name: 'poolsNew',
  action() {
    BlazeLayout.render('masterLayout', { content: 'poolsNew' });
  },
});

// http://app.com/pools/:_id
poolsRoutes.route('/:_id', {
  name: 'poolsShow',
  action(params) {
    log.debug(`We're viewing a single document: ${params._id}`);
    BlazeLayout.render('masterLayout', { content: 'poolsShow' });
  },
});

// http://app.com/pools/:_id/edit
poolsRoutes.route('/:_id/edit', {
  action(params) {
    log.debug(`We're editing a single document: ${params._id}`);
  },
});

// http://app.com/pools/:_poolId/teams/new
poolsRoutes.route('/:poolId/teams/new', {
  name: 'poolTeamsNew',
  action(params) {
    log.debug(`We're creating teams for a pool: ${params.poolId}`);
    BlazeLayout.render('masterLayout', { content: 'poolTeamsNew' });
  },
});
