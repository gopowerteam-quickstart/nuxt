module.exports = {
  gateway: 'https://gateway.local.xbt-dev.top',
  openapi: '/v2/api-docs',
  output: './src/http',
  exportModels: true,
  applications: {
    'frontend-service': 'xbt-platform-frontend-service',
    'dingtalk-service': 'xbt-platform-dingtalk-service',
    'wechat-service': 'xbt-platform-wxcp-service',
    // 'material-service': 'xbt-platform-material-service',
    // 'authority-service': 'xbt-platform-authority-service',
    // 'frontend-service': 'xbt-platform-frontend-service',
    // 'report-service': 'xbt-platform-report-service',
    // 'activity-service': 'xbt-platform-act-service',
    'file-service': 'xbt-platform-file-service',
    // 'wechat-service': 'xbt-platform-wxcp-service',
    // 'customer-service': 'xbt-platform-customer-service',
    // 'data-service': 'xbt-platform-data-service',
    'mall-service': 'xbt-platform-mall-service',
  },
  logger: true,
  exportServices: {
    serviceResolve({ object, tags }) {
      const tag = tags.find(tag => tag.name === object.tags?.[0])

      if (tag && tag.description)
        return tag.description.replace(/\s/g, '').replace(/Controller$/g, '')
      else
        return 'default'
    },
    operationResolve({ object }) {
      return object.operationId.replace(/Using(GET|POST|PUT|PATCH|DELETE)_*[0-9]*$/g, '')
    },
    responseType: 'promise',
    excludeQueryParams: [
      'pageNumber',
      'pageSize',
      'page',
      'size',
      'paged',
      'unpaged',
      'order',
      'sort',
      'offset',
    ],
  },
}
