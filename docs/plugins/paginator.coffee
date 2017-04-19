
module.exports = (env, callback) ->
  ### Paginator plugin. Defaults can be overridden in config.json
      e.g. "paginator": {"perPage": 10} ###

  defaults =
    template: 'index.jade' # template that renders pages
    articles: 'articles' # directory containing contents to paginate
    first: 'index.html' # filename/url for first page
    filename: 'page/%d/index.html' # filename for rest of pages
    perPage: 2 # number of articles per page
    groupSort: {}

  # assign defaults any option not set in the config file
  options = env.config.paginator or {}
  for key, value of defaults
    options[key] ?= defaults[key]

  getArticles = (contents) ->
    # helper that returns a list of articles found in *contents*
    # note that each article is assumed to have its own directory in the articles directory
    articles = contents[options.articles]._.directories.map (item) -> item.index
    # skip articles that does not have a template associated
    articles = articles.filter (item) -> item.template isnt 'none'
    # sort article by date
    articles.sort (a, b) -> b.metadata.sort - a.metadata.sort
    groupedArticlesObj = articles.reduce (acc, curr) ->
      groupName = curr.metadata.group
      if not acc[groupName]
        acc[groupName] =
          groupName: groupName
          items: []
      acc[groupName].items.push curr
      return acc
    , {}
    groupedArticles = (val for key, val of groupedArticlesObj)
    groupedArticles.sort (a, b) -> (options.groupSort[b.groupName] || 0) - (options.groupSort[a.groupName] || 0)
    return groupedArticles

  # add the article helper to the environment so we can use it later
  env.helpers.getGroupedArticles = getArticles

  # tell the plugin manager we are done
  callback()
